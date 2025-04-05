const mongoose = require('mongoose');

const groupschema = new mongoose.Schema({
    name:{
        type :String,
        required: true,
    },

    members:{
        type: [String],
        required: true,
    }
},{timestamps:true});

const Group = mongoose.model('Group', groupschema);
module.exports = Group;
//This code defines a Mongoose schema and model for a "Group" entity. The schema includes two fields: "name" (a required string) and "members" (an array of strings, also required). The model is then exported for use in other parts of the application.