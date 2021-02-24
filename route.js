const express = require ("express");
const router = new express.Router();
const MensRanking = require("../src/models/structure");

//Create Data
router.post("/mens",async (req,res)=>{
    try{
        const createMensRecords = new MensRanking(req.body)
        const insertData = await createMensRecords.save();
        res.status(201).send(insertData);
    }catch(err){
        res.status(400).send(err);
    }
})


//Read Whole Data
router.get("/mens",async (req,res)=>{
    try{
        const getData = await MensRanking.find({}).sort({"ranking":1});
        res .send(getData);
    }catch(err){
        res.status(400).send(err);
    }
})
//Read Individual Data
router.get("/mens/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const getData = await MensRanking.findById(_id);
        res .send(getData);
    }catch(err){
        res.status(400).send(err);
    }
})



//Update Data
router.patch("/mens/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const updateData = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res .send(updateData);
    }catch(err){
        res.status(500).send(err);
    }
})

//Delete Data
router.delete("/mens/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const deleteData = await MensRanking.findByIdAndDelete(_id);
        if(_id){
            res .send(deleteData);
        }else{
            res.send();
        }
        
    }catch(err){
        res.status(500).send(err);
    }
})


module.exports=router;