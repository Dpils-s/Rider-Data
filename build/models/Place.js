"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const placeSchema = new mongoose_1.default.Schema({
    place: {
        type: JSON,
        required: true,
    },
    deliveryDate: {
        type: String,
        timestamps: false
    },
    description: {
        type: String,
    }
});
const Place = mongoose_1.default.model('Place', placeSchema);
exports.default = Place;
//# sourceMappingURL=Place.js.map