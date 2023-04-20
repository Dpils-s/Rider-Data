"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./Routes/routes"));
const app = (0, express_1.default)();
const PORT = 4080; // Change this to your desired port
// Connect to MongoDB
mongoose_1.default.connect('mongodb://localhost:4001/DashBuddy')
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
});
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api', routes_1.default);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
