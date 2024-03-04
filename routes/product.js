const express=require('express');
const router=express.Router();
const Product=require('../models/product')

router.post('/create', async (req ,res)=>{
    try
    {
        data =req.body;
        prod= new Product(data);
        savedProduct = await prod.save();
        res.status(200).send(savedProduct);
    } catch (error) {res.status(400).send(error)}
    });
router.get('/all',async (req,res)=>{
        try{
            prods = await Product.find();
            res.status(200).send(prods);
    
        }catch (error) {res.status(400).send(error);}
});
router.get('/getByid/:id', async (req,res)=>{
    try{
        id=req.params.id;
        us = await Product.findOne({_id:id});
        res.status(200).send(us);

    }catch (error) {res.status(400).send(error); }
});
router.delete('/delete/:id', async (req,res)=>{
    try{
    id =req.params.id;
    del = await Product.findByIdAndDelete({_id:id});
    res.status(200).send(del);
    }catch(error){res.status(400).send(error);}
});
router.put('/update/:id',async(req,res)=>{
    try{
        id=req.params.id;
        newData=req.body;
        up=await Product.findByIdAndUpdate({_id:id},newData);
        res.status(200).send(up);
    }catch(error){res.status(400).send(error);}
})



module.exports = router;