const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    location: String,
    job_link: String,
    employment_type: String,
    experience: String,
    source: String,
    country: String,
    min_exp: Number,
    max_exp: Number,
    companytype: String,
    companyImageUrl: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
