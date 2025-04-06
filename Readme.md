# Splitwise Clone (Backend)

A Node.js + Express.js backend for a Splitwise-style expense tracking app. Built with MongoDB and Mongoose, this project allows users to:

- Create groups
- Add shared expenses
- Track individual balances
- View debt summaries
- Automatically split costs
- [Upcoming] Settle-up feature & budget tracking

---

## Features

- **Groups**: Create groups with multiple members.
- **Expenses**: Add expenses and split them among members.
- **Balances**: Calculate net debts between users.
- **Smart Summaries**: Get readable statements like “Bob owes Alice ₹200”.
- **MongoDB**: Used to store groups, expenses, and balances.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Environment Config**: dotenv

---

## Project Structure

```
├── controllers/
│   ├── expenseController.js
│   └── groupController.js
├── models/
│   ├── balance.models.js
│   ├── budget.models.js
│   ├── expense.models.js
│   └── group.models.js
├── routes/
│   ├── expenseRoute.js
│   └── groupRoutes.js
├── utils/
│   └── splitUtils.js
├── .env
├── index.js
└── README.md
```

## Sample API Routes

### Create a Group
**POST** `/api/groups`
```json
{
  "name": "Trip to Goa",
  "members": ["Alice", "Bob", "Charlie"]
}
```

### Add an Expense
**POST** `/api/expenses`
```json
{
  "description": "Hotel Booking",
  "amount": 3000,
  "paidby": "Alice",
  "groupId": "66138564b1df1de4e6fe9c9d",
  "members": ["Alice", "Bob", "Charlie"]
}
```

### Get Expense Summary
**GET** `/api/expenses/balances/66138564b1df1de4e6fe9c9d`
```json
{
  "summary": [
    "Bob owes Alice ₹1000.00",
    "Charlie owes Alice ₹1000.00"
  ]
}
```

---

## Upcoming Features

- ✅ Settle-up functionality
- ✅ Budget tracking per group
- 📊 Expense visualization
- 🔐 Auth (Login/Signup)

---

## Credits

Made with ❤️ by [Your Name]

