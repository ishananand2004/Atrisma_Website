const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { validateContactRequest, handleValidationErrors } = require('../validators');

router.post('/', validateContactRequest, handleValidationErrors, contactController.submitContact);

module.exports = router;
