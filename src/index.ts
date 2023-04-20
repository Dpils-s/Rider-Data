import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes/routes';

const app = express();
const PORT = 4080; // Change this to your desired port

// Connect to MongoDB
mongoose.connect('mongodb://localhost:4001/DashBuddy')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    });

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




