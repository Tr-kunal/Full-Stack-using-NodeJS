const { name } = require("ejs");

const users = [
    {
        id: 1,
        name: "Kunal Singhal",
        age: 21,
        password: "K@123",
        city: "Delhi"
    },
    {
        id: 2,
        name: "Manish Bhardwaj",
        age: 22,
        password: "M@123",
        city: "Gurugram"
    },
    {
        id: 3,
        name: "Kartik",
        age: 20,
        password: "Ka@123",
        city: "Kosi Kalan"
    }
];

module.exports = users;
