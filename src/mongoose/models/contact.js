import mongoose from 'mongoose';
import { contactSchema } from '../schemas/contact.js';

export const ContactModel = mongoose.model('Contacts', contactSchema);
