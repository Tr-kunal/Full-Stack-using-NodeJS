const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const users = require("./data/users");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/users", (req, res) => {
    res.render("users", { users });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
