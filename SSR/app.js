const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/Backend")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

