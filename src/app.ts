import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from "./router/AppRouter";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:2500/Data')
.then(() => {
    console.log('Connected to MongoDB!');
    app.listen(4080, () => {
        console.log('App listening on port 4080!');
    });
})
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/places', router);