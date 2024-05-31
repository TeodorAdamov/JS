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
        validate: {
            validator: function (value) {
                if (value.startsWith('http') || value.startsWith('https')) {
                    return true;
                }
                return false;

            },
            message: url => `${url.value} is not a valid URL`
        }
    }
})


const Cast = mongoose.model('Cast', castSchema);

module.exports = {
    Cast
}

