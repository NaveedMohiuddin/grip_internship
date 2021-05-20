const express = require('express');
const router = new express.Router();
const Customer = require('../Models/customer');
const Transfer = require('../Models/transfer');


router.get("/",(req,res)=>{
    res.status(201).send("Banking backend");
})

router.get("/customers",async (req,res)=>{
    try{
        const ViewData = await Customer.find({});
        res.status(201);
        res.send(ViewData);
    }catch(err){
        res.send(err);

    }
})

router.get("/customers/:Accountno",async (req,res)=>{
    
    try{
        const Accountno = req.params.Accountno;
        const getCustomer = await Customer.find({Accountno:Accountno});
        res.status(201).send(getCustomer);
    }catch(err){
        console.log(err);
    }
})

router.put('/customers/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const upadateData = await Customer.findByIdAndUpdate(id,req.body,{new : true});
        res.status(201).send(updateData);

    }catch(err){
        res.status(400).send(err);
    }
});

// localhost:8000/transfer
router.get('/transfer',async (req,res)=>{
    try{
        const transferData = await Transfer.find({});
        res.status(201).send(transferData);
    }catch(err){
        console.log(err);
    }
})

router.post('/transfer',async (req,res)=>{
    try{
        const transferData = new Transfer(req.body);
        const createTransfer = await transferData.save();
        res.status(201).send(createTransfer);
    }catch(err){
        console.log(err);
    }
})


module.exports = router;