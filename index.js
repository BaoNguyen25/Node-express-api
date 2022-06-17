import express from 'express';
import bodyParser from 'body-parser'; // allow take in post request body 

const app = express(); // initialize express application   
const PORT = 5000;

app.use(bodyParser.json()); // initialize bodyparser middleware, use json data in whole app

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); 