import mongoose from 'mongoose';

export const contactSchema = new mongoose.Schema({
  name: { required: true, type: String },
  city: String,
  company: String,
  position: String,
  phoneNumber: { required: true, type: String },
  groupName: String,
  image: String,
});
