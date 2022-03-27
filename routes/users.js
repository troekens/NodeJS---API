import express from 'express';

import { createUser, getUsers, getUser, deleteUser, patchUser } from '../controllers/users.js';

const router = express.Router();

// All routes in here are starting with /users
router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', patchUser);
router.post('/', createUser)

export default router;

