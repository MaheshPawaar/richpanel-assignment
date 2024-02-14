const mongoose = require('mongoose');
require('dotenv').config();

try {
  mongoose.connect(`${process.env.MONGO_URI}/helpdesk`);
  console.log('Connected to MongoDB...');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
