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
const uuid_1 = require("uuid"); // For generating unique IDs
const Place_1 = __importDefault(require("../../src/models/Place"));
class MockPlaceController {
    constructor() {
        this.places = [
            new Place_1.default({
                _id: '1',
                place: { name: 'Place 1', location: { lat: 0, lng: 0 } },
                description: 'Description 1',
            }),
            new Place_1.default({
                _id: '2',
                place: { name: 'Place 2', location: { lat: 0, lng: 0 } },
                description: 'Description 2',
            })
        ];
    }
    getAllPlaces() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.places;
        });
    }
    getPlaceById(UId) {
        return __awaiter(this, void 0, void 0, function* () {
            const place = this.places.find((place) => place._id === UId);
            return place || null;
        });
    }
    createPlace(place, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPlace = {
                id: (0, uuid_1.v4)(),
                place,
                description,
            };
            this.places.push(newPlace);
            return newPlace;
        });
    }
    clearPlaces() {
        this.places.length = 0;
    }
}
exports.default = MockPlaceController;
//# sourceMappingURL=MockPlaceController.js.map