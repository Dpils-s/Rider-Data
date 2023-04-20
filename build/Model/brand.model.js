"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const brandSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Brand', brandSchema);
