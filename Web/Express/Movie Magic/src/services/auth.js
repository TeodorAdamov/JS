const { User } = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require("../utility/utils");


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


async function login(email, pass) {

    try {
        const user = await User.findOne({ email: email }).lean();
        if (!user) {
            throw new Error('Invalid email or password')
        }
        const isPassCorrect = await bcrypt.compare(pass, user.password);

        if (isPassCorrect) {
            return generateToken(user);
        } 

        throw new Error('Invalid email or password')
    } catch (err) {
        throw err
    }
}



module.exports = {
    register,
    login
}