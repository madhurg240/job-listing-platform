const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// middlewares
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://job-listing-platform-rq9c.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

// routes
app.use("/api", jobRoutes);


app.get("/", (req, res) => {
  res.send("Job Listing API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
