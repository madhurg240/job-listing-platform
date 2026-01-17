import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async (location = "") => {
    try {
      const url = location
        ? `http://localhost:5000/api/jobs?location=${location}`
        : `http://localhost:5000/api/jobs`;

      const res = await axios.get(url);
      setJobs(res.data);
      setSelectedJob(res.data[0] || null);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="p-4 text-2xl font-semibold border-b bg-white shadow-sm">
        Job Listing Portal
      </header>

      {/* Search Bar */}
      <SearchBar onSearch={fetchJobs} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <JobList
          jobs={jobs}
          selectedJob={selectedJob}
          onSelect={setSelectedJob}
        />
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
}

export default App;
