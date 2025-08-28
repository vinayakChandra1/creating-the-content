// app.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve index.html when someone visits "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
