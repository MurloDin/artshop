const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    pictureType: {
        type: String,
    },
    date: {
        type: String,
    },
    phone: {
        type: String,
    },
    comment: {
        type: String,
    }
});


module.exports = mongoose.model('Order', orderSchema)
