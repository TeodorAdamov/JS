const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/treasure-vault'

async function configDatabase() {
    await mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase };