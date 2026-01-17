import { useEffect, useState } from "react";
import API from "./services/api";
import SearchBar from "./components/searchBar";
import JobList from "./components/jobList";
import JobDetails from "./components/jobDetails";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async (location = "") => {
    try {
      const url = location
        ? `/api/jobs?location=${location}`
        : `/api/jobs`;

      const res = await API.get(url);
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
      <header className="p-4 text-2xl font-semibold border-b bg-white shadow-sm">
        Job Listing Portal
      </header>

      <SearchBar onSearch={fetchJobs} />

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
