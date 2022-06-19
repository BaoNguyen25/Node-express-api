import express from 'express';
import bodyParser from 'body-parser'; // allow take in post request body 
import usersRoutes from './routes/users.js';

const app = express(); // initialize express application   
const PORT = 5000;

app.use(bodyParser.json()); // initialize bodyparser middleware, use json data in whole app
app.use('/users', usersRoutes); // create users routes that are implemented in users.js

app.get('/', (req, res) => res.send('Hello'));
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); 