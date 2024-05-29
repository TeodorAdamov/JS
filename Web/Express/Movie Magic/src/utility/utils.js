function asyncHandler(fn) {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
}

function errorHandler(err, req, res, next) {

    const statusCode = err.statusCode || 500;
    const message = err.message || 'An unexpected error occurred';

    res.status(500).render('error', { message, statusCode })
}

module.exports = {
    asyncHandler,
    errorHandler
}