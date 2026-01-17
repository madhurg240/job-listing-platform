const express = require("express");
const router = express.Router();
const jobs = require("../data/Mployee.me Task Data.json");

router.get("/jobs", (req, res) => {
  const { location } = req.query;

  let result = jobs;

  if (location) {
    result = jobs.filter(job =>
      job.location &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  res.json(result);
});

module.exports = router;
