const jwt = require('jsonwebtoken')

const db = require('../models')

const validateRegisterInput = require('../validation/register')
const validateLoginInput = require('../validation/login')

exports.register = async (req, res, next) => {
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body)

    try {
        if (!isValid) {
            return res.status(400).json(errors)
        }
        const user = await db.User.create(req.body)
        const {
            id,
            username
        } = user
        const token = jwt.sign({
            id,
            username
        }, process.env.SECRET)
        res.status(200).json({
            id,
            username,
            token
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.json(error.msg = "User already exist")

        }
        next(error)
    }
}

exports.login = async (req, res, next) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }

    try {
        const user = await db.User.findOne({
            username: req.body.username
        })
        const {
            id,
            username
        } = user
        const valid = await user.comparePassword(req.body.password)
        if (valid) {
            const token = jwt.sign({
                id,
                username
            }, process.env.SECRET)
            res.json({
                id,
                username,
                token
            })
        } else {
            return res.status(400).json({
                'message': 'Invalid credentials'
            })
        }
    } catch (error) {
        return res.status(400).json(
            error.msg = 'Invalid credentials'
        )

    }
}