const express = require("express");
const axios = require("axios");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to validate request
app.use((req, res, next) => {
  if (!req.body.developers || !Array.isArray(req.body.developers)) {
    return res.status(400).json({ error: "Invalid input, expected an array of developers" });
  }
  next();
});

// Helper function to get developer info from GitHub
async function getDeveloperInfo(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return { name: response.data.name, bio: response.data.bio };
  } catch (error) {
    console.error(`Error fetching data for ${username}:`, error);
    return { name: username, bio: "Error fetching data" };
  }
}

// POST route to get developer info
app.post("/", async (req, res, next) => {
  try {
    const developerPromises = req.body.developers.map(getDeveloperInfo);
    const results = await Promise.all(developerPromises);
    return res.json(results);
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
