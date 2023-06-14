import { PlaceDocument } from '../models/Place';

interface IPlaceController {
    getAllPlaces(): Promise<PlaceDocument[]>;
    getPlaceById(UId: string): Promise<PlaceDocument | null>;
    createPlace(place: JSON, description: string): Promise<PlaceDocument>;
}

export default IPlaceController;
