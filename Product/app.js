const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

const products = require('./data/products');

app.get('/',(req,res)=>{
    res.render('dashboard');
})

app.get('/products',(req,res)=>{
    res.render('products',{products});
})

app.get('/products/add',(req,res)=>{
    res.render('add');
})

app.post('/products',(req,res)=>{
    console.log(req.body);
    const {name,price,image,desc} = req.body;
    products.push({
        id:products[products.length -1].id +1,
        name:name,
        price:price,
        image:image,
        desc:desc
    })
    res.redirect('/products');
})

app.get('/products/:id/delete',(req,res)=>{
    const id = req.params.id;
    const productIndex = products.find(p=>p.id === parseInt(id));
    if(productIndex!==-1){
        products.splice(productIndex,1);
    }
    res.redirect('/products');
})

app.get('/products/:id/edit',(req,res)=>{
    const id = req.params.id;
    const product = products.find(p=>p.id === parseInt(id));
    res.render('edit',{product});
})

app.post('/products/:id/edit',(req,res)=>{
    const id = req.params.id;
    const {name, price, image, desc} = req.body;
    const product=products.find(p=>p.id===parseInt(id));
    if(product){
        product.name=name;
        product.price=price;
        product.image=image;
        product.desc=desc;
    }
    res.redirect('/products');
})

app.get(/>*/,(req,res)=>{
    res.status(404).send("Page Not Found");
})

app.listen(port,()=>{
    console.log(`Server is live on ${port}`);
})