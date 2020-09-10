import mongoose, { Schema } from 'mongoose';

const userModel = mongoose.Schema({
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
  role: {
    type: String,
  },
  userEvent: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }]
},
{timestamp: true}

);

const User = mongoose.Model('User', userModel);

export { User };