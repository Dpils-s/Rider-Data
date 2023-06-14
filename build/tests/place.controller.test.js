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
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const express_1 = __importDefault(require("express"));
const Place_1 = __importDefault(require("../src/models/Place"));
const PlaceController_1 = require("../src/controllers/PlaceController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/places', PlaceController_1.router);
describe('Place Controller', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    describe('GET /places', () => {
        it('should return all places', () => __awaiter(void 0, void 0, void 0, function* () {
            // Mock the Place.find() method to return sample data
            const places = [
                new Place_1.default({
                    _id: "place-1",
                    place: { name: "Place 1", location: { lat: 0, lng: 0 } },
                    description: "Description 1",
                }),
                new Place_1.default({
                    _id: "place-2",
                    place: { name: "Place 2", location: { lat: 0, lng: 0 } },
                    description: "Description 2",
                }),
                // Add more places here if needed
            ];
            jest.spyOn(Place_1.default, 'find').mockResolvedValue(places);
            const response = yield (0, supertest_1.default)(app).get('/places');
            (0, chai_1.expect)(response.status).to.equal(200);
            (0, chai_1.expect)(response.body).to.deep.equal(places);
        }));
        it('should handle errors and return 500 status', () => __awaiter(void 0, void 0, void 0, function* () {
            // Mock the Place.find() method to throw an error
            jest.spyOn(Place_1.default, 'find').mockRejectedValue(new Error('Database error'));
            const response = yield (0, supertest_1.default)(app).get('/places');
            (0, chai_1.expect)(response.status).to.equal(500);
            (0, chai_1.expect)(response.body).to.deep.equal({ message: 'Server error' });
        }));
    });
    describe('GET /places/:UId', () => {
        it('should return a specific place', () => __awaiter(void 0, void 0, void 0, function* () {
            const newPlace = new Place_1.default({
                _id: "1",
                place: { name: "New Place", location: { lat: 0, lng: 0 } },
                description: "New description",
            });
            jest.spyOn(Place_1.default, 'findById').mockResolvedValue(newPlace);
            const response = yield (0, supertest_1.default)(app).get('/places/1');
            (0, chai_1.expect)(response.status).to.equal(200);
            (0, chai_1.expect)(response.body).to.deep.equal(newPlace);
        }));
        it('should handle errors and return 500 status', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(Place_1.default, 'findById').mockRejectedValue(new Error('Database error'));
            const response = yield (0, supertest_1.default)(app).get('/places/1');
            (0, chai_1.expect)(response.status).to.equal(500);
            (0, chai_1.expect)(response.body).to.deep.equal({ message: 'Error retrieving data' });
        }));
    });
    describe('POST /places', () => {
        it('should create a new place', () => __awaiter(void 0, void 0, void 0, function* () {
            const newPlace = new Place_1.default({
                _id: "1",
                place: { name: "New Place", location: { lat: 0, lng: 0 } },
                description: "New description",
            });
            jest.spyOn(Place_1.default.prototype, 'save').mockResolvedValue(newPlace);
            const response = yield (0, supertest_1.default)(app)
                .post('/places')
                .send({
                place: { name: 'New Place', location: { lat: 0, lng: 0 } },
                description: 'New description',
            });
            (0, chai_1.expect)(response.status).to.equal(200);
            (0, chai_1.expect)(response.body).to.deep.equal(newPlace);
        }));
        it('should handle errors and return 500 status', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.spyOn(Place_1.default.prototype, 'save').mockRejectedValue(new Error('Database error'));
            const response = yield (0, supertest_1.default)(app)
                .post('/places')
                .send({
                place: { name: 'New Place', location: { lat: 0, lng: 0 } },
                description: 'New description',
            });
            (0, chai_1.expect)(response.status).to.equal(500);
            (0, chai_1.expect)(response.body).to.deep.equal({ message: 'Server error' });
        }));
    });
});
//# sourceMappingURL=place.controller.test.js.map