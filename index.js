const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());// Adds middleware to parse incoming JSON requests. 
// //This is important for handling POST/PUT requests with JSON payloads.

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,//tells Mongoose to use the modern, more robust parser.
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const groupRoutes = require('./routes/groupRoutes.js');
app.use('/api/groups', groupRoutes);

const expenseRoutes = require('./routes/expenseRoute.js');
app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

