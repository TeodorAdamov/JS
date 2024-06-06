const { register } = require("../services/auth");
const { asyncHandler } = require("../utility/utils");

const authController = {
    loginGet: (req, res) => {
        res.render('login');
    },
    registerGet: (req, res) => {
        res.render('register');
    },
    registerPost: async (req, res) => {
        const { email, password, repass } = req.body;
        if (!email) {
            throw new Error('Email required');
        }
        if (!password) {
            throw new Error('Password required');
        }
        if (password !== repass) {
            throw new Error('Passwords don\'t match');
        }
        const token = await register(email, password);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        })

        res.redirect('/');
    }
}



module.exports = {
    authController: {
        loginGet: asyncHandler(authController.loginGet),
        registerGet: asyncHandler(authController.registerGet),
        registerPost: asyncHandler(authController.registerPost)
    }
}