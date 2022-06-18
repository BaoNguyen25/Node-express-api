import express from 'express';
import { v4 as uuidv4 } from 'uuid'; 

const router = express.Router();

let users = []

// Get a list of all users
router.get('/', (req, res) => {
    res.send(users);
});

// Create a new user
router.post('/', (req, res) => {
    const user = req.body; 
    const userWithID = {...user, id: uuidv4()}; // create new user object that have ID

    users.push(userWithID);
    res.send(`User with the name ${user.firstName} added to the database!`);
});

// Get user's information by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

// Delete a user
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database!`);
});

export default router;