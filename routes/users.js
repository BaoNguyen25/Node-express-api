import express from 'express';

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers); // Get a list of all users

router.post('/', createUser); // Create a new user

router.get('/:id', getUser); // Get user's information by id

router.delete('/:id', deleteUser); // Delete a user

router.patch('/:id', updateUser); // Update user's information

export default router;