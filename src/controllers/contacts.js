import mongoose from 'mongoose';

import { ContactModel } from '../mongoose/models/contact.js';

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function get(req, res) {
  const filter = req.query;
  try {
    const contacts = await ContactModel.find(filter);

    res.status(200);
    res.json(contacts);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ 
      message: 'Internal server error',
    });
  }
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function getDuplicates(_req, res) {
  try {
    const result = await ContactModel.aggregate([
      { 
        $group: {
          _id: "$phoneNumber",
          contacts: { $push: "$$ROOT" },
          count: { $sum: 1 },
        },
      },
      {
        $match: {
          count: { $gt: 1 },
        },
      },
      {
        $project: {
          phoneNumber: "$_id",
          contacts: "$contacts",
          _id: 0,
        }
      },
    ]);

    res.status(200);
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ 
      message: 'Internal server error',
    });
  }
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function getById(req, res) {
  const { contactId } = req.params;

  try {
    const contact = await ContactModel.findById(contactId);

    res.status(200);
    res.json(contact);
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ 
      message: 'Internal server error',
    });
  }
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function create(req, res) {
  const contactObject = req.body;

  try {
    const contact = new ContactModel(contactObject);

    await contact.save();
    res.status(201);
    res.json(contact);
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      res.status(400);
      res.json(e.errors);
    } else {
      console.error(e);
      res.status(500);
      res.json({ 
        message: 'Internal server error',
      });
    }
  }
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function update(req, res) {
  const { contactId } = req.params;
  const updateContactObject = req.body;

  try {
    const maybeUpdatedDoc = await ContactModel.findOneAndUpdate({ _id: contactId }, updateContactObject, { runValidators: true, });

    if (maybeUpdatedDoc) {
      res.status(200);
      res.json(maybeUpdatedDoc);
    } else {
      res.status(404);
      res.json({ message: 'Not found' });
    }
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      res.status(400);
      res.json(e.errors);
    } else {
      console.error(e);
      res.status(500);
      res.json({ 
        message: 'Internal server error',
      });
    }
  }
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function remove(req, res) {
  const { contactId } = req.params;

  try {
    const maybeRemovedDoc = await ContactModel.findByIdAndRemove(contactId, { runValidators: true, });

    if (maybeRemovedDoc) {
      res.status(200);
      res.json(maybeUpdatedDoc);
    } else {
      res.status(404);
      res.json({ message: 'Not found' });
    }
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ 
      message: 'Internal server error',
    });
  }
}
