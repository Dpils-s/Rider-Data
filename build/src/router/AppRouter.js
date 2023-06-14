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
const PlaceController_1 = __importDefault(require("../controllers/PlaceController"));
const placeController = new PlaceController_1.default();
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const places = yield placeController.getAllPlaces();
        res.json(places);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));
router.get('/:UId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { UId } = req.params;
        const place = yield placeController.getPlaceById(UId);
        if (place) {
            res.json(place);
        }
        else {
            res.status(404).json({ message: 'Place not found' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving data' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { place, description } = req.body;
        const newPlace = yield placeController.createPlace(place, description);
        res.json(newPlace);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));
exports.default = router;
//# sourceMappingURL=AppRouter.js.map