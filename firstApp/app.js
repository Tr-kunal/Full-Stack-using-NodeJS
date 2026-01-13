const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.get("/contact", (req, res) => {
    res.send("Contact Page");
})

app.get("/cat", (req, res) => {
    res.send("Cat 1");
})

app.get("/cat", (req, res) => {
    res.send("Cat 2");
})

app.get(/.*/, (req, res) => {
    res.send("404 Not Found");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})