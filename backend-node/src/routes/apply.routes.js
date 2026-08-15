const express = require('express');
const router = express.Router();
const applyController = require('../controllers/apply.controller');
const { validateApplyRequest, handleValidationErrors } = require('../validators');

router.post('/', validateApplyRequest, handleValidationErrors, applyController.submitApplication);

module.exports = router;
