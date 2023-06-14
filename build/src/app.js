"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const AppRouter_1 = __importDefault(require("./router/AppRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:2500/Data')
    .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(4080, () => {
        console.log('App listening on port 4080!');
    });
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.use('/places', AppRouter_1.default);
//# sourceMappingURL=app.js.map