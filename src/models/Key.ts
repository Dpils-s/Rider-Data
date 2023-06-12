import mongoose from 'mongoose';

export interface KeyDocument extends mongoose.Document {
    place: object;
    description: string;
}

const keySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
    },
});

const Key = mongoose.model<KeyDocument>('Key', keySchema);

export default Key;