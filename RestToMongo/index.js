const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

mongoose
  .connect("mongodb://localhost:27017/Backend")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

app.use(express.static(path.join(__dirname, "public")));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
  city: String,
});

const Users = mongoose.model("Users", userSchema);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", async (req, res) => {
  const { username, password, age, city } = req.body;

  try {
    const user = await Users.create({
      username,
      password,
      age: Number(age),
      city,
    });

    res.redirect("/users");
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Failed to create user.");
  }
});

// List all users
app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.render("users", { users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Failed to load users.");
  }
});

// Delete a user
app.post("/users/:id/delete", async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.redirect("/users");
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).send("Failed to delete user.");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
