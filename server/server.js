import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import bodyParser from 'body-parser';


// Connect to MongoDB
mongoose.connect('mongodb://localhost/scrumTaskPlannerDb');

// Initialize http server
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Logger that outputs all requests into the console
app.use(morgan('combined'));

// Use v1 as prefix for all API endpoints
app.use('/v1', router);

// Launch the server on port 8080
const server = app.listen(8080, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
});