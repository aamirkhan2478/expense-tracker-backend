require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const appRouter = require("./routes");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

// Connect to the database
require("./database/connection")();

// Allow requests from the client
app.use(cors());

// Middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("./public"));

app.use("/api", appRouter);

// Starting endpoint
app.get("/", (_req, res) => {
  res.send("<h1 style='color:green;'>Server is running.</h1>");
});

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;