const { body, validationResult } = require('express-validator');

// Validation matching ContactRequestDTO.java
const validateContactRequest = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message').notEmpty().withMessage('Message is required'),
];

// Validation matching ApplyRequestDTO.java
const validateApplyRequest = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('role').notEmpty().withMessage('Role is required'),
  body('message').notEmpty().withMessage('Message is required'),
];

// Middleware to format validation errors like Spring Boot's @Valid
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Spring Boot typically returns a map of field -> message or a list of errors
    const errorMap = {};
    errors.array().forEach(err => {
      errorMap[err.path] = err.msg;
    });
    
    // Custom logic: return 400 with the formatted errors
    return res.status(400).json(errorMap);
  }
  next();
};

module.exports = {
  validateContactRequest,
  validateApplyRequest,
  handleValidationErrors
};
