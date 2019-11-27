const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});
const express = require("express");
const middleware = require("./middleware");
const connect = require("./db");
const port = process.env.PORT || 5000;

// API Imports
const usersRouter = require("./api/users/usersRouter");

const app = express();

// Global Middleware -- these are functions that run on server
// initialization and every subsequent api call
middleware(app);

// API Middleware -- Each controller is mounted at the URL
app.use("/api/users", usersRouter);

// Node
const start = async () => {
  try {
    await connect(app);
    app.listen(port, () => {
      console.log("server is running on port " + port);
    });
  } catch (e) {
    throw e;
  }
};

start();
