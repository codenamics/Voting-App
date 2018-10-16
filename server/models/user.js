const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    polls: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Poll'
    }]
})

module, exports = mongoose.model('User', userSchema)