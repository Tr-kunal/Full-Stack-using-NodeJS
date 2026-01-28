const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === "/" && method === "GET"){
        res.end("Home Page");
    }
    else if(url === "/about" && method === "GET"){
        res.end("About Page");
    }
    else if(url === "/contact" && method === "GET"){
        res.end("Contact Page");
    }
    else if(url === "/products" && method === "GET"){
        const filePath = path.join(__dirname,"views", "products.html");
        fs.createReadStream(filePath).pipe(res);
    }
    else if(url === "/style.css" && method === "GET"){
        const filePath = path.join(__dirname,"public", "style.css");
        fs.createReadStream(filePath).pipe(res);
    }
    else{
        res.end("Page Not Found");
    }
});

server.listen(4000, () => {
    console.log("Server is running on port 4000");
});