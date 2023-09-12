const express=require('express');
const products=require('./utils/products');
const path=require('path');
const { error } = require('console');
const app= express();

//encontrar carpetas estaticas//
app.use(express.static(path.join(__dirname,'public')));
//ruta a la carpeta vistas//
app.set('views',path.join(__dirname,'views'));
//motor de vistas//
app.set('view engine','ejs');


app.get('/',(req,res)=>{

 
//la funcion recive algo, le puedo pones el nombre que quiera
//en este caso fue data, recive un body
    products.getAllProducts((error,data)=>{
        if (error) {
            return  res.send('fatal error') 
           }
     let JSONProducts=JSON.parse(data);  
   return res.render('index',{
        title:'E-comerce',
        JSONProducts
        
  });
 });
});


app.get('/contacto',(req,res)=>{
    res.render('pages/contacto',{
        title:'E-comerce | contactos',
        products
       
        
    });
});


app.get('/formulario',(req,res)=>{
    res.render('pages/formulario',{
        title:'formulario | E-comerce'
    });
});




app.listen(3000,()=>{
    console.log('funcionando en el puerto 3000');
});



    
