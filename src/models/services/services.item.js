const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
});

module.exports = mongoose.model('Сервис', projectsSchema)
