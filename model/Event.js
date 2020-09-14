import mongoose, { Schema } from 'mongoose';

const eventModel = mongoose.Schema({
  
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
    userId: Number,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
},
{timestamp: true}
);

const Event = mongoose.Model("Event", eventModel);

export { Event };