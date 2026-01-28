const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const users = require("./data/users");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/users", (req, res) => {
    res.render("users", { users });
});

app.get("/users/new", (req, res) => {
    res.render("new");
});

app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find((u) => u.id == id);
    res.render("show", { user });
});

app.post("/users/:id/edit", (req, res) => {
    const {id} = req.params;
    const user = users.find((u) => u.id == id);
    res.render("edit", { user });
});

app.post("/users", (req, res) => {
    const { name, age, password, city } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        age,
        password,
        city
    };
    users.push(newUser);
    res.redirect("/users");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
