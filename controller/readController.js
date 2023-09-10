const foodModel=require('../models/foodModel');


exports.readFood= async (req,res)=>{
    try {
    const foods=await foodModel.find({name:req.body.name});
        res.send(foods);
    } catch(err) {
        res.status(500).send(err.message)
    }
    }