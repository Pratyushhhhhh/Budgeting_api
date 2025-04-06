const express = require('express');
const router = express.Router();

const {
    addExpense,
    getExpenses,
    getBalances
} = require('../controllers/expenseController');

// Routes
router.post('/', addExpense);
router.get('/', getExpenses);
router.get('/balances/:groupId', getBalances);

module.exports = router;
