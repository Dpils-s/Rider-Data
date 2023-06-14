"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Place_1 = __importDefault(require("../models/Place"));
const router = express_1.default.Router();
class PlaceController {
    getAllPlaces() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const places = yield Place_1.default.find();
                return places;
            }
            catch (err) {
                console.error(err);
                throw new Error('Error retrieving places');
            }
        });
    }
    getPlaceById(UId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const place = yield Place_1.default.findById(UId);
                return place;
            }
            catch (err) {
                console.error(err);
                throw new Error('Error retrieving place');
            }
        });
    }
    createPlace(place, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPlace = new Place_1.default({
                    place,
                    description,
                });
                yield newPlace.save();
                return newPlace;
            }
            catch (err) {
                console.error(err);
                throw new Error('Error creating place');
            }
        });
    }
}
exports.default = PlaceController;
//# sourceMappingURL=PlaceController.js.map