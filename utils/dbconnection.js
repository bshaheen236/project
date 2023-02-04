const mongoose = require('mongoose');
const url = process.env.DB_URL;

mongoose.set('strictQuery', true);

const db =
    mongoose.connect(url)
        .then(res => console.log('db connected'))
        .catch(err => console.log(err));

module.exports = db;