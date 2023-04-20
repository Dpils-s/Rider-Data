import { Request, Response } from 'express';
import Brand, { IBrand } from '../Model/brand.model';

// GET /api/brands
export const getBrands = async (req: Request, res: Response): Promise<void> => {
    try {
        const brands: IBrand[] = await Brand.find({},'-__v');
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};