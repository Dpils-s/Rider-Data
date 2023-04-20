"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brand_controller_1 = require("../Controller/brand.controller");
const router = (0, express_1.Router)();
router.get('/brands', brand_controller_1.getBrands);
// Define a route for getting the "pong" message
router.get('/ping', (req, res) => {
    res.send('pong');
});
exports.default = router;
