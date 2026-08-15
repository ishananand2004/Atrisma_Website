const express = require('express');
const router = express.Router();
const careerController = require('../controllers/career.controller');

router.get('/', careerController.getAllCareers);

module.exports = router;
