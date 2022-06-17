import express from 'express';
import { v4 as uuidv4 } from 'uuid'; 

const router = express.Router();

const users = []

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body; 
    const userWithID = {...user, id: uuidv4()}; // create new user object that have ID

    users.push(userWithID);
    res.send(`User with the name ${user.firstName} added to the database!`);
});
export default router;