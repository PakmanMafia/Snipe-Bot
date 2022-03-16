const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    },
    pfpUrl: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true
    },
    createdTimestamp: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('messageLog', schema);