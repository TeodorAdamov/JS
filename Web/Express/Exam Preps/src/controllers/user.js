const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middlewares/guards');
const { register, login } = require('../services/user');
const { createToken } = require('../services/token');
const { parseError } = require('../util');

const userRouter = Router();


userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register')
})

userRouter.post(
    '/register',
    isGuest(),
    body('email').trim().isLength(10).withMessage('Email must be atleast 10 chacacters long.'),
    body('password').trim().isLength(4).withMessage('Password must be atleast 4 characters long.'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Passwords dont\'t match'),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const validResult = validationResult(req);

            if (validResult.errors.length) {
                throw validResult.errors;
            }

            const user = await register(email, password);
            const token = createToken(user);

            res.cookie('token', token, { httpOnly: true });
            res.redirect('/');
        } catch (err) {
            res.render('register', { data: { email }, errors: parseError(err).errors });
        }


    })

userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login');
})

userRouter.post('/login', isGuest(), async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error('All fields are required');
        }

        const user = await login(email, password);
        const token = createToken(user);

        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        res.render('login', { data: { email }, error: err.message });
        return;
    }
})

userRouter.get('/logout', isUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});


module.exports = {
    userRouter
}