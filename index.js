const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());// Adds middleware to parse incoming JSON requests. 
// //This is important for handling POST/PUT requests with JSON payloads.
//console.log("MONGO_URL =", process.env.MONGO_URL);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {}
)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Welcome to Splitwise Backend</h1>
    <p>Use the links below to view data:</p>
    <ul>
      <li><a href="/api/groups">View All Groups</a></li>
      <li><a href="/api/expenses">View All Expenses</a></li>
    </ul>
    <p>You can also POST to these routes using Postman or frontend app.</p>
  `);
});


const groupRoutes = require('./routes/groupRoutes.js');
app.use('/api/groups', groupRoutes);

const expenseRoutes = require('./routes/expenseRoute');
app.use('/api/expenses', expenseRoutes);
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

