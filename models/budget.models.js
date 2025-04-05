const mongoose = require('mongoose');
const budgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    spent: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

export const Budget = mongoose.model('Budget', budgetSchema);