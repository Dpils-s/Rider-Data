import {PlaceDocument} from "../models/Place";
import IPlaceController from "../interfaces/IPlaceController";


class PlaceManager {
    private controller: IPlaceController;
    constructor(controller: IPlaceController) {
        this.controller = controller;
    }
    public async getAllPlaces(): Promise<PlaceDocument[]> {
        try {
            return await this.controller.getAllPlaces();
        } catch (err) {
            console.error(err);
            throw new Error('Error retrieving places');
        }
    }

    public async getPlaceById(UId: string): Promise<PlaceDocument | null> {
        try {
            return await this.controller.getPlaceById(UId);
        } catch (err) {
            console.error(err);
            throw new Error('Error retrieving place');
        }
    }

    public async createPlace(place: JSON, description: string): Promise<PlaceDocument> {
        try {
            return await this.controller.createPlace(place, description);
        } catch (err) {
            console.error(err);
            throw new Error('Error creating place');
        }
    }
}

export default PlaceManager;
