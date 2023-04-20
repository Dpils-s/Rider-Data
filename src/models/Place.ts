import mongoose from 'mongoose';

export interface PlaceDocument extends mongoose.Document {
    place: object;
    description: string;
}

const placeSchema = new mongoose.Schema({
    place: {
        type: JSON,
        required: true,
    },
    description: {
        type: String,
    }
});

const Place = mongoose.model<PlaceDocument>('Place', placeSchema);

export default Place;