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
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentDate = new Date().getFullYear() + "-" + (Number.parseInt(new Date().getMonth().toString()) + 1) + "-" + new Date().getDate();
        const places = yield Place_1.default.find().where({ 'deliveryDate': currentDate });
        res.json(places);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));
router.get('/:UId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Retrieve the ID from the request parameters
        const { UId } = req.params;
        // Retrieve the data from MongoDB by ID
        const data = yield Place_1.default.findById(UId);
        // Return the data as a response
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving data' });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { place, description } = req.body;
        const newPlace = new Place_1.default({
            place,
            description,
        });
        yield newPlace.save();
        res.json(newPlace);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));
exports.default = router;
//# sourceMappingURL=PlaceController.js.map