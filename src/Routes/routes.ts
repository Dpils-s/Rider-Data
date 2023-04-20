import { Router } from 'express';
import { getBrands } from '../Controller/brand.controller';

const router = Router();

router.get('/brands', getBrands);

// Define a route for getting the "pong" message
router.get('/ping', (req, res) => {
    res.send('pong');
});

export default router;