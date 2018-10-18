const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')


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
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next()
        }
        const hashed = await bcrypt.hash(this.password, 10)
        this.password = hashed
        return next()
    } catch (error) {
        return next(error)
    }
})

userSchema.methods.comparePassword = async function (attempt, next) {
    try {
        return await bcrypt.compare(attempt, this.password)
    } catch (error) {
        return next(error)
    }
}

module.exports = mongoose.model('User', userSchema)