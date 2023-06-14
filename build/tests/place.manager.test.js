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
const chai_1 = require("chai");
const PlaceManager_1 = __importDefault(require("../src/Manager/PlaceManager"));
const MockPlaceController_1 = __importDefault(require("./mock/MockPlaceController"));
describe('PlaceManager', () => {
    let placeManager;
    let mockController;
    beforeEach(() => {
        mockController = new MockPlaceController_1.default();
        placeManager = new PlaceManager_1.default(mockController);
    });
    it('should get all places', () => __awaiter(void 0, void 0, void 0, function* () {
        const places = yield placeManager.getAllPlaces();
        (0, chai_1.expect)(places).to.have.lengthOf(2);
        (0, chai_1.expect)(places[0].place).to.equal({ name: 'Place 1', location: { lat: 0, lng: 0 } });
        (0, chai_1.expect)(places[1].place).to.equal({ name: 'Place 2', location: { lat: 0, lng: 0 } });
    }));
    it('should get a place by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const place = yield placeManager.getPlaceById('1');
        (0, chai_1.expect)(place).to.not.be.null;
        (0, chai_1.expect)(place === null || place === void 0 ? void 0 : place.place).to.equal({ name: 'Place 1', location: { lat: 0, lng: 0 } });
    }));
    it('should return null when getting a non-existent place', () => __awaiter(void 0, void 0, void 0, function* () {
        const place = yield placeManager.getPlaceById('3');
        (0, chai_1.expect)(place).to.be.null;
    }));
    it('should create a new place', () => __awaiter(void 0, void 0, void 0, function* () {
        const newPlace = yield placeManager.createPlace(JSON, 'New Description');
        (0, chai_1.expect)(newPlace).to.not.be.null;
        (0, chai_1.expect)(newPlace === null || newPlace === void 0 ? void 0 : newPlace.place).to.equal(JSON);
        (0, chai_1.expect)(newPlace === null || newPlace === void 0 ? void 0 : newPlace.description).to.equal('New Description');
    }));
});
//# sourceMappingURL=place.manager.test.js.map