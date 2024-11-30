// errorHandler.js

// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error to the console for debugging purposes

    // Set the status code and send the error message
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
};

module.exports = errorHandler;
