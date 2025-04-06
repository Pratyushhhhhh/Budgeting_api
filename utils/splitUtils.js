// utils/splitUtils.js
const Balance = require('../models/balance.models.js');

// 💰 Splits the amount among members and returns who owes whom
function calcSplit(paidby, members, amount) {
    const share = amount / members.length;
    const balance = {};

    for (const member of members) {
        if (member === paidby) continue;

        if (!balance[member]) balance[member] = {};
        balance[member][paidby] = share;
    }

    return balance;
}

// 🔄 Updates balances in the database
function updateBalance(groupId, balances) {
    const operations = [];

    for (const [receiver, payers] of Object.entries(balances)) {
        for (const [payer, amount] of Object.entries(payers)) {
            operations.push(
                Balance.findOneAndUpdate(
                    { groupId, payer, receiver },
                    { $inc: { amount: amount } },
                    { upsert: true, new: true }
                )
            );
        }
    }

    return Promise.all(operations);
}

module.exports = {
    calcSplit,
    updateBalance,
};
