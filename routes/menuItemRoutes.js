const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

router.post('/', async(req,res) => {
    try{
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('data saved successfully');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/', async(req,res) => {
    try{
        const data = await MenuItem.find();
        console.log('data fetched successfully');
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:taste', async(req,res) => {
    try{
        const tasteType = req.params.taste;
        if(tasteType == 'Sweet' || tasteType =='Sour' || tasteType == 'Spicy'){
            const response = await MenuItem.find({taste : tasteType});
            console.log('response fetched successfully');
            res.status(200).json(response)
        }else{
            res.status(404).json({error : 'Invalid taste Type'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;