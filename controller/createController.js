const foodModel=require('../models/foodModel');

exports.createFood = async (req,res) =>{
    const food=new foodModel(req.body);
    
    try{
        await food.save();
        res.send(food);
    } catch(err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}