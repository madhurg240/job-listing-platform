function JobDetails({ job }) {
  if (!job) {
    return (
      <div className="w-2/3 flex items-center justify-center text-gray-400">
        Select a job from the list
      </div>
    );
  }

  return (
    <div className="w-2/3 p-8 bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {job.title}
          </h2>
          <p className="text-gray-600 mt-1">
            {job.company} · {job.location}
          </p>
        </div>

        <a
          href={job.job_link}
          target="_blank"
          className="px-5 py-2 bg-pink-600 text-white rounded-full text-sm hover:bg-pink-700 transition"
        >
          Quick Apply
        </a>
      </div>

      {/* Job Details */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-2">
          Job Details
        </h3>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <p><b>Employment:</b> {job.employment_type}</p>
          <p><b>Experience:</b> {job.experience}</p>
          <p><b>Experience Range:</b> {job.min_exp} – {job.max_exp} years</p>
          <p><b>Source:</b> {job.source}</p>
        </div>
      </div>

      {/* Qualifications */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-2">
          Qualifications
        </h3>

        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
            Entry / Mid Level
          </span>
          <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
            Relevant Experience
          </span>
          <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
            Industry Knowledge
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-2">
          Job Description
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">
          This role requires relevant experience in the given domain.
          Candidates should be comfortable working in a professional
          environment and collaborating with teams.
        </p>
      </div>
    </div>
  );
}

export default JobDetails;
