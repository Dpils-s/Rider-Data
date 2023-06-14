import express, { Request, Response } from 'express';
import Place, { PlaceDocument } from '../models/Place';
import IPlaceController from "../interfaces/IPlaceController";

const router = express.Router();

class PlaceController implements IPlaceController{
    async getAllPlaces(): Promise<PlaceDocument[]> {
        try {
            const places = await Place.find();
            return places;
        } catch (err) {
            console.error(err);
            throw new Error('Error retrieving places');
        }
    }
    async getPlaceById(UId: string): Promise<PlaceDocument | null> {
        try {
            const place = await Place.findById(UId);
            return place;
        } catch (err) {
            console.error(err);
            throw new Error('Error retrieving place');
        }
    }
    async createPlace(place: JSON, description: string): Promise<PlaceDocument> {
        try {
            const newPlace: PlaceDocument = new Place({
                place,
                description,
            });
            await newPlace.save();
            return newPlace;
        } catch (err) {
            console.error(err);
            throw new Error('Error creating place');
        }
    }
}

export default  PlaceController ;
