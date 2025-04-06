# 💰 Budgeting App (Splitwise + Budget Tracker)

A Node.js backend API designed to help users manage shared expenses (like Splitwise) and track monthly budgets.

## ✅ Features Implemented

- 👥 **Group Creation**  
  Create groups with multiple members.

- 💸 **Expense Splitting**  
  Add shared expenses, and automatically calculate who owes whom how much.

- ↺ **Net Balancing Logic**  
  Smartly reduces circular debts — shows minimal transactions needed to settle up.

- 📊 **Expense Summary**  
  View human-readable summaries like:
  ```
  Alice owes Bob ₹150.00  
  Charlie owes Alice ₹50.00
  ```

## Features in Progress

- 🗕️ **Monthly Budgeting**  
  Set a monthly budget, track spending against it.

- 📈 **Expense Categories & Insights**  
  Breakdown spending into categories for better financial planning.

- 🔔 **Alerts & Overspending Warnings**  
  Get notified if you’re overspending your budget (coming soon).

---

## 📦 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- RESTful APIs
- Postman for testing

---

## 📂 Project Structure

```
├── models/             # Mongoose models
├── routes/             # API route handlers
├── controllers/        # Logic separation (WIP)
├── utils/              # Helper functions (WIP)
├── .gitignore
├── index.js
└── README.md
```

---

## 🛠️ Setup & Run Locally

```bash
git clone https://github.com/Pratyushhhhhh/Budgeting_api.git
cd Budgeting_api
npm install
npm run dev
```

> Make sure to create a `.env` file with your MongoDB URI:
```env
MONGO_URL=your_mongodb_connection_string
```

---

## 🔗 API Endpoints

| Method | Route                  | Description              |
|--------|------------------------|--------------------------|
| POST   | `/api/groups`          | Create a new group       |
| GET    | `/api/groups`          | List all groups          |
| POST   | `/api/expenses`        | Add a new expense        |
| GET    | `/api/expenses`        | View all expenses        |
| GET    | `/api/expenses/balances/:groupId` | Get balances summary |

---

## 🙌 Contributions

Budgeting logic & UI preview features are welcome! Feel free to fork and raise PRs.

---

## 📌 TODOs

- [ ] Budget Controller & Routes
- [ ] Frontend (React or mobile)
- [ ] Visual UI for balances

---


