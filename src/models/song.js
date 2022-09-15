const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const song = new Schema({
    name: { type: String, maxLength: 255 },
    author: { type: String, maxLength: 255 },
    img: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('song', song);
