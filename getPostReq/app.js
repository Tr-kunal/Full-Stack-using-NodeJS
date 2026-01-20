const express = require("express");
const app = express();
const port = 4000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("home");
})

app.get("/signup", (req, res) => {
    res.render("signup");

});

app.get("/loginPage", (req, res) => {
    res.render("loginPage");
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("logged in");
});

app.post("/abc", (req, res) => {
    console.log(req.body);
    res.send("ok");
});

const todos = ['game','coding','instagram','youtube'];

app.get("/todos",(req,res)=>{
    res.render("todos",{todos});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

