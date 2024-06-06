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

function verifyToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        throw new Error('Registration required for this page');
    }
}

module.exports = {
    asyncHandler,
    errorHandler,
    verifyToken
}