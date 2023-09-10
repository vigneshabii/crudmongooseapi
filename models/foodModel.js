const mongoose=require('mongoose');

const foodSchema=mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true,
        lowercase:true,
    },
    calories:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0) throw new console.error("Negative Calaries aren't real");
        },
    }
})
const foodModel=mongoose.model('foods',foodSchema);

module.exports=foodModel;