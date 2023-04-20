"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Product', productSchema);