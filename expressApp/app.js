const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.send(`Product ${req.params.id}`);
})

app.get('/getData',(req,res)=>{
    console.log(req.query); //getting data after question mark
    res.send("Data");
})

const movies = [
    {
    name:"Avenger",
    rating:8.5,
    },
    {
    name:"Jadugar",
    rating:8.4,
    },
    {
    name:"KGF",
    rating:8.2,
    },
]

// app.get('/movies',(req,res)=>{
//     res.send(movies);
// })

app.get('/getMovie',(req,res)=>{
    // console.log(req.params);
    let name = req.query.name;
    console.log(name);

    res.json(movies.find((movie)=>movie.name.toLowerCase()===name.toLowerCase()));
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
