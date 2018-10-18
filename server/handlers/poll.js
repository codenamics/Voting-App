const db = require('../models')

exports.showPolls = async (req, res, next) => {
    try {
        const polls = await db.Poll.find()
        res.status(200).json(polls)
    } catch (error) {
        error.status = 400;
        next(error)
    }
}

exports.createPoll = async (req, res, next) => {
    try {
        const {
            id
        } = req.decoded
        const user = await db.User.findById(id)
        const {
            question,
            options
        } = req.body
        const poll = await db.Poll.create({
            question,
            user,
            options: options.map(title => ({
                title,
                votes: 0
            }))
        })

        user.polls.push(poll._id)

        await user.save()

        res.status(200).json({ ...poll._doc,
            user: user._id
        })
    } catch (error) {
        error.status = 400;
        next(error)
    }
}