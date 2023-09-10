const foodModel=require('../models/foodModel');

exports.deleteFood=async (req,res)=>{
    try{
        const foods = await foodModel.findByIdAndDelete(req.params.id)
        if (!foods) res.status(404).send('No Items Found')
        if (foods) res.send('Deleted')
    } catch(err) {
        res.status(500).send(err)
    }
}