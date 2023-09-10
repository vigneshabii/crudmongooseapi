const express=require('express');
const router=express.Router();
const {createFood}=require('../controller/createController');
const {readFood}=require('../controller/readController');
const {updateFood}=require('../controller/updateController');
const {deleteFood}=require('../controller/deleteController')

router.post('/foods',createFood);
router.get('/foods',readFood);
router.patch('/foods/:id',updateFood);
router.delete('/foods/:id',deleteFood)


module.exports=router;