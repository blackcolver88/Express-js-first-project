const express= require('express');
const Product=require('../models/product')
require('../config/connect')
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("hello");
});
app.post('/createp', async (req ,res)=>{
    try
    {
        data =req.body;
        prod= new Product(data);
        savedProduct = await prod.save();
        res.status(200).send(savedProduct);
    } catch (error) {res.status(400).send(error)}
    });
app.get('/allp',async (req,res)=>{
        try{
            prods = await Product.find();
            res.status(200).send(prods);
    
        }catch (error) {res.status(400).send(error);}
});
app.get('/getByidp/:id', async (req,res)=>{
    try{
        id=req.params.id;
        us = await Product.findOne({_id:id});
        res.status(200).send(us);

    }catch (error) {res.status(400).send(error); }
});
app.delete('/deleterp/:id', async (req,res)=>{
    try{
    id =req.params.id;
    del = await Product.findByIdAndDelete({_id:id});
    res.status(200).send(del);
    }catch(error){res.status(400).send(error);}
});
app.put('/up/:id',async(req,res)=>{
    try{
        id=req.params.id;
        newData=req.body;
        up=await Product.findByIdAndUpdate({_id:id},newData);
        res.status(200).send(up);
    }catch(error){res.status(400).send(error);}
})