const express = require('express');
const router = express.Router();//mini app to attach route handlers
//we'll export this router to use in the main app
const Group = require('../models/group.models.js');//import the group model'

router.post('/', async (req,res)=> {
    const {name, members}=req.body;//destructure the request body to get name and members
    try{
        const newGroup = await Group.create({name, members});//create a new group using the Group model
        res.status(201).json(newGroup);//send a response with status 201 and the new group data
    }catch(error){
        res.status(500).json({error: error.message});//send a response with status 500 and the error message
    }

});

router.get('/',async (req,res)=>{
    try{
        const groups= await Group.find();//find all groups in the database
        res.json(groups);//send the groups as a response
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

module.exports = router;
