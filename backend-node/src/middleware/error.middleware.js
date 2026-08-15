// Mimicking Spring Boot's GlobalExceptionHandler
// @RestControllerAdvice
const errorHandler = (err, req, res, next) => {
  console.error('Unhandled Exception:', err);

  // If it's our custom 404 error from the service
  if (err.statusCode === 404) {
    return res.status(404).json({
      message: err.message || "Resource not found",
      details: "Requested resource was not found"
    });
  }

  // Default to 500 Internal Server Error like GlobalExceptionHandler does
  res.status(500).json({
    message: err.message || "An unexpected error occurred",
    details: err.stack || "Internal Server Error"
  });
};

module.exports = errorHandler;
