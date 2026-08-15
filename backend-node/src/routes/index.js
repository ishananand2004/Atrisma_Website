const express = require('express');
const router = express.Router();

const productRoutes = require('./product.routes');
const careerRoutes = require('./career.routes');
const contactRoutes = require('./contact.routes');
const applyRoutes = require('./apply.routes');

router.use('/products', productRoutes);
router.use('/careers', careerRoutes);
router.use('/contact', contactRoutes);
router.use('/apply', applyRoutes);

module.exports = router;
