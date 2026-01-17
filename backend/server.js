const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// ✅ TEMPORARY: allow all origins (SAFE for demo projects)
app.use(cors());

// If you want strict mode later, we can tighten it

app.use(express.json());

// routes
app.use("/api", jobRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Job Listing API running");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
