const { User } = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function register(email, pass) {

    const hashedPass = await bcrypt.hash(pass, 10)
    const user = new User({
        email,
        password: hashedPass
    })

    try {
        await user.save();
        return generateToken(user);
    } catch (err) {
        throw err;
    }
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

module.exports = {
    register
}