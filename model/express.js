var mongoose = require('mongoose');
var ExpressSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    conf_password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var express = mongoose.model('express', ExpressSchema);
module.exports = Express;