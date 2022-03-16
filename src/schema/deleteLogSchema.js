const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    delId: {
        type: String,
        required: false
    },
    time: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('deleteLog', schema);