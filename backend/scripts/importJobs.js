const mongoose = require("mongoose");
const Job = require("../models/Job");
const rawJobs = require("../data/Mployee.me Task Data.json");

function sanitizeJobs(jobs) {
  return jobs.map(job => ({
    ...job,
    companyImageUrl:
      typeof job.companyImageUrl === "string"
        ? job.companyImageUrl
        : null
  }));
}

async function importData() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jobdb");

    const cleanJobs = sanitizeJobs(rawJobs);

    await Job.deleteMany();
    await Job.insertMany(cleanJobs);

    console.log("Jobs imported successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

importData();
