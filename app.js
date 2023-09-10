const express=require('express');
const app=express();
const dbo=require('./config/db');
const foodRouter=require('./router/foodRouter')

app.use(express.json());

app.use(foodRouter);

app.listen(3500,()=>{
    console.log('Listening port 3500')
})