const express=require('express');
const app=express();
const path=require('path');


app.use(express.static('public'));


app.get('/',(req,res)=>res.sendFile(path.join(__dirname, 'views', 'index.html')))

app.get('/',(req,res)=>{res.send()});

app.listen(3030,()=>console.log('servidor corriendo'));