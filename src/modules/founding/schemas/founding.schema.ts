import { Schema } from 'mongoose';

export const FoundingSchema = new Schema({
  name: { type: String, required: true },
  description: Object,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
