function JobList({ jobs, selectedJob, onSelect }) {
  return (
    <div className="w-1/3 bg-white border-r overflow-y-auto">
      {jobs.map((job) => {
        const isSelected =
          selectedJob &&
          (
            selectedJob._id === job._id ||
            selectedJob.job_link === job.job_link
          );

        return (
          <div
            key={job._id || job.job_link}
            onClick={() => onSelect(job)}
            className={`p-4 border-b cursor-pointer transition-all
              ${
                isSelected
                  ? "bg-blue-100 border-l-4 border-blue-600"
                  : "hover:bg-gray-50"
              }
            `}
          >
            <h3 className="font-semibold text-gray-800 text-sm">
              {job.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {job.company} · {job.location}
            </p>

            <div className="flex gap-2 mt-2 flex-wrap">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                {job.employment_type}
              </span>

              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                {job.experience}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobList;
