require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/student_crud', {
  serverSelectionTimeoutMS: 30000, 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

console.log("JWT_SECRET:", process.env.JWT_SECRET);


app.use('/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
