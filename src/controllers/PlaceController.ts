import express, { Request, Response } from 'express';
import Place, { PlaceDocument } from '../models/Place';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const { place, description } = req.body;

        const newPlace: PlaceDocument = new Place({
            place,
            description,
        });

        await newPlace.save();

        res.json(newPlace);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;