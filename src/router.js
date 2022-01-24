import { Router } from 'express';
import * as contactsController from './controllers/contacts.js';

export const router = Router()
  .get('contacts', contactsController.get)
  .get('contacts/duplicates', contactsController.getDuplicates)
  .get('contacts/:contactId', contactsController.getById)
  .post('contacts/:contactId', contactsController.create)
  .patch('contacts/:contactId', contactsController.update)
  .delete('contacts/:contactId', contactsController.remove)
  ;
