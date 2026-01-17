const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(cors({
  origin: "https://your-project.vercel.app",
  credentials: true
}));

app.use(express.json());

// routes
app.use("/api", jobRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Job Listing API running");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
