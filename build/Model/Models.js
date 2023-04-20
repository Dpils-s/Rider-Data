"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const brand = new mongoose_1.default.Schema({
    name: String,
    description: String,
});
// Create a Mongoose model
const Brand = mongoose_1.default.model('Brand', brand);
exports.default = Brand;
