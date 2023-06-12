import express, { Request, Response } from 'express';
import Key, { KeyDocument } from '../models/Key';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const places = await Key.find();
        res.json(places);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;