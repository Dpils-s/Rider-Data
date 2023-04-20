"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const placeSchema = new mongoose_1.default.Schema({
    place: {
        type: Object,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const Place = mongoose_1.default.model('Place', placeSchema);
exports.default = Place;
