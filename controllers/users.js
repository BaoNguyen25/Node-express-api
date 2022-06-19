import { v4 as uuidv4 } from 'uuid'; 

let users = []

export const getAllUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body; 
    const userWithID = {...user, id: uuidv4()}; // create new user object that have ID

    users.push(userWithID);
    res.send(`User with the name ${user.firstName} has been added to the database!`);
}

export const getUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);

    if(!foundUser)
        res.status(404).send('User with the given ID does not exists!');
    else
        res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);

    if(!foundUser)
        res.status(404).send('User with the given ID does not exists!');
    else {
        users = users.filter((user) => user.id !== id); // remove user with specific ID
        res.send(`User with the id ${id} has been deleted from the database!`);
    }
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if(!user)
        res.status(404).send(`User with the given id does not exists!`);
    else {
        if(firstName) {
            user.firstName = firstName;
        }
    
        if(lastName) {
            user.lastName = lastName;
        }
    
        if(age) {
            user.age = age;
        }
        res.send(`User with the id ${id} has been updated completely!`);
    }   
}