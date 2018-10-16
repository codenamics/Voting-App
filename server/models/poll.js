const mongoose = require('mongoose')
const Schema = mongoose.Schema

const optionSchema = new Schema({
    title: String,
    votes: {
        type: Number,
        default: 0
    }
})
const pollSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: String,
    options: [optionSchema],
    voted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model('Poll', pollSchema)