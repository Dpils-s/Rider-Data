import express, {Request, Response} from "express";
import PlaceController from "../controllers/PlaceController";

const placeController = new PlaceController()
const router = express.Router();
router.get('/', async (req: Request, res: Response) => {
    try {
        const places = await placeController.getAllPlaces();
        res.json(places);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:UId', async (req: Request<{ UId: string }>, res: Response) => {
    try {
        const { UId } = req.params;
        const place = await placeController.getPlaceById(UId);
        if (place) {
            res.json(place);
        } else {
            res.status(404).json({ message: 'Place not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const { place, description } = req.body;
        const newPlace = await placeController.createPlace(place, description);
        res.json(newPlace);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;