import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import {PlaceDocument} from "../../src/models/Place";
import IPlaceController from "../../src/interfaces/IPlaceController";

class MockPlaceController implements IPlaceController {

    private places: PlaceDocument[] = [
        {
            _id: '1',
            place: {name: 'Place 1', location: {lat: 0, lng: 0}},
            description: 'Description 1',
        } as PlaceDocument,
        {
            _id: '2',
            place: {name: 'Place 2', location: {lat: 0, lng: 0}},
            description: 'Description 2',
        } as PlaceDocument
    ];

    async getAllPlaces(): Promise<PlaceDocument[]> {
        return this.places;
    }

    async getPlaceById(UId: string): Promise<PlaceDocument | null> {
        const place = this.places.find((place) => place._id === UId);
        return place || null;
    }

    async createPlace(place: JSON, description: string): Promise<PlaceDocument> {
        const newPlace: PlaceDocument = {
            id: uuidv4(),
            place,
            description,
        } as PlaceDocument;
        this.places.push(newPlace);
        return newPlace;
    }
}
export default MockPlaceController;
