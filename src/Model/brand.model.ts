import { Schema, model, Document } from 'mongoose';

export interface IBrand extends Document {
    id: string;
    name: string;
    description: string;
}

const brandSchema = new Schema<IBrand>({
    id: {type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true }
});

export default model<IBrand>('Brand', brandSchema);