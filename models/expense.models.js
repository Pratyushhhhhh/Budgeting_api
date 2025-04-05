const e = require('express');
const mongoose = require('mongoose');

const expenseSchema =new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    paidby:{
        type:String,
        required:true,
    },
    groupId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Group'
    },
    members:{
        type:[String],
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
},{timestamps:true});

const Expense =mongoose.model('Expense',expenseSchema);
module.exports = Expense;
