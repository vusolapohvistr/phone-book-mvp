import { Schema } from 'mongoose';

export const contactSchema = new Schema({
  name: { required: true, type: String },
  city: String,
  company: String,
  position: String,
  phoneNumber: { required: true, type: String },
  groupName: String,
  image: String,
});
