const express = require('express');
const router = express.Router(); // mini app to attach route handlers
const Expense = require('../models/expense.models.js');

router.post('/',async (req,res)=> {
    const{ description, amount, paidby, groupId, members} = req.body;
    if(!groupId){
        return res.status(400).json({error: 'Group ID is required'});
    }

    try{
        const newExp = await Expense.create({description, amount, paidby, groupId, members,date :new Date()});
        res.status(201).json(newExp);
    }catch(error){
        res.status(500).json({error: error.message});   
    }
});

router.get('/',async (req,res)=>{
    try{
        const expenses=await Expense.find().populate('groupId','name').exec();
        res.json(expenses);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;

