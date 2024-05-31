const mongoose = require('mongoose');


const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 199
    },
    born: {
        type: String,
        required: true
    },
    nameInMovie: {
        type: String,
        required: true
    },
    castImage: {
        type: String,
        required: true,
    },
    attached: {
        type: Boolean,
        default: false
    }
})


const Cast = mongoose.model('Cast', castSchema);

module.exports = {
    Cast
}

