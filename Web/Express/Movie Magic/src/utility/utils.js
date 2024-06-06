const jwt = require('jsonwebtoken');

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

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
    };

    const secretKey = 'secretkey';
    const options = {
        expiresIn: '1h'
    };

    return jwt.sign(payload, secretKey, options);
}

function verifyToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        throw new Error('Registration required for this page');
    }

    try {
        const secretKey = 'secretkey';
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
    } catch (err) {
        throw new Error('Invalid Token')
    }
    return next();
}

module.exports = {
    asyncHandler,
    errorHandler,
    generateToken,
    verifyToken
}