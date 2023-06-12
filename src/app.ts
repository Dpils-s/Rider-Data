import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import placeRouter from './controllers/PlaceController';
import keyRouter from './controllers/KeyController';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:2500/Data');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB!');
});

app.use('/places', placeRouter);
app.use('/key', keyRouter);

app.listen(4080, () => {
    console.log('App listening on port 4080!');
});