const Group = require('../models/group.models.js');//import the group model'

const createGroup= async (req,res)=> {
    const {name, members}=req.body;//destructure the request body to get name and members
    try{
        const newGroup = await Group.create({name, members});//create a new group using the Group model
        res.status(201).json(newGroup);//send a response with status 201 and the new group data
    }catch(error){
        res.status(500).json({error: error.message});//send a response with status 500 and the error message
    }

};

const getGroups = async (req, res) => {
    try {
        const groups = await Group.find();
        res.json(groups);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createGroup,
    getGroups,
};