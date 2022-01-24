import { Model } from 'mongoose';
import { contactSchema } from '../schemas/contact';

/** @type {Model} */
export const ContactModel = new Model('Contacts', contactSchema);
