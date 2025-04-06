const Expense = require('../models/expense.models.js');
const Balance = require('../models/balance.models.js');
const { updateBalance, calcSplit } = require('../utils/splitUtils');

// Add new expense
const addExpense = async (req, res) => {
    const { description, amount, paidby, groupId, members } = req.body;

    if (!groupId) {
        return res.status(400).json({ error: 'Group ID is required' });
    }

    try {
        const newExpense = await Expense.create({
            description,
            amount,
            paidby,
            groupId,
            members,
            date: new Date(),
        });

        const balances = calcSplit(paidby, members, amount);
        await updateBalance(groupId, balances);

        res.status(201).json({ expense: newExpense, split: balances });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().populate('groupId', 'name').exec();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get balances summary
const getBalances = async (req, res) => {
    const { groupId } = req.params;

    try {
        const rawBalances = await Balance.find({ groupId });
        const netMap = {};

        rawBalances.forEach(({ payer, receiver, amount }) => {
            const key = `${payer}->${receiver}`;
            const reverseKey = `${receiver}->${payer}`;

            if (netMap[reverseKey]) {
                netMap[reverseKey] -= amount;
            } else {
                netMap[key] = (netMap[key] || 0) + amount;
            }
        });

        const readable = [];

        for (const [key, amount] of Object.entries(netMap)) {
            if (amount === 0) continue;

            const [payer, receiver] = key.split('->');
            if (amount > 0) {
                readable.push(`${payer} owes ${receiver} ₹${amount.toFixed(2)}`);
            } else {
                readable.push(`${receiver} owes ${payer} ₹${Math.abs(amount).toFixed(2)}`);
            }
        }

        res.json({ summary: readable });
    } catch (error) {
        console.error('Error fetching balances:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    addExpense,
    getExpenses,
    getBalances,
};
