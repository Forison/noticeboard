import mongoose from 'mongoose';

mongoose.Schema({
  
  title: {
    type: String,
    required: true,
    min: 5
  },
  description: {
    type: String,
    required: true,
    min: 15
  },
  date: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  eventPOster: {
    user_id: Number,
    required: true
  }
},
{timestamp: true}

);