import mongoose from 'mongoose';

mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 5

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
},
{timestamp: true}

);