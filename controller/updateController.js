const foodModel=require('../models/foodModel');

exports.updateFood =async (req,res)=>{
    try{
        const foods=await foodModel.findByIdAndUpdate(req.params.id,req.body)
        await foodModel.save();
        res.send(foods)
    } catch(err) {
        res.status(500).send(err)
    }
}