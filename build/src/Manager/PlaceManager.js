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
Object.defineProperty(exports, "__esModule", { value: true });
class PlaceManager {
    constructor(controller) {
        this.controller = controller;
    }
    getAllPlaces() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.controller.getAllPlaces();
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
                return yield this.controller.getPlaceById(UId);
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
                return yield this.controller.createPlace(place, description);
            }
            catch (err) {
                console.error(err);
                throw new Error('Error creating place');
            }
        });
    }
}
exports.default = PlaceManager;
//# sourceMappingURL=PlaceManager.js.map