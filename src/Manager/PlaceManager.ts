import {PlaceDocument} from "../models/Place";
import IPlaceController from "../interfaces/IPlaceController";


class PlaceManager {
    private controller: IPlaceController;
    constructor(controller: IPlaceController) {
        this.controller = controller;
    }
    public async getAllPlaces(): Promise<PlaceDocument[]> {
            return await this.controller.getAllPlaces();
    }

    public async getPlaceById(UId: string): Promise<PlaceDocument | null> {
            return await this.controller.getPlaceById(UId);
    }

    public async createPlace(place: JSON, description: string): Promise<PlaceDocument> {
            return await this.controller.createPlace(place, description);
    }
}

export default PlaceManager;
