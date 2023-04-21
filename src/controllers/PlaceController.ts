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

router.get('/:UId', async (req: Request<{UId: String}>, res: Response) => {
    try {
        // Retrieve the ID from the request parameters
        const { UId } = req.params;

        // Retrieve the data from MongoDB by ID
        const data = await Place.findById(UId);

        // Return the data as a response
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving data' });
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