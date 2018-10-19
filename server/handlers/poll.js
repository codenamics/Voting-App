const db = require('../models')

exports.showPolls = async (req, res, next) => {
    try {
        const polls = await db.Poll.find()
            .populate('user', ['username', 'id'])
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

exports.usersPools = async (req, res, next) => {
    try {
        const {
            id
        } = req.decoded
        const user = await db.User
            .findById(id)
            .populate('polls')

        res.status(200).json(user.polls)
    } catch (error) {
        error.status = 400
        next(error)
    }
}

exports.getPoll = async (req, res, next) => {
    try {
        const {
            id
        } = req.params
        const poll = await db.Poll
            .findById(id)
            .populate('user', ['username', 'id'])

        if (!poll) {
            throw new Error('Polls not found')
        }
        res.status(200).json(poll)



    } catch (error) {
        error.status = 400
        next(error)
    }
}

exports.deletePoll = async (req, res, next) => {
    try {
        const {
            id: pollId
        } = req.params
        const {
            id: userId
        } = req.decoded

        const poll = await db.Poll.findById(pollId)
        if (!poll) {
            throw new Error('No poll found')
        }
        if (poll.user.toString() !== userId) {
            throw new Error('Unauthorized access')
        }
        await poll.remove()
        res.status(202).json({
            msg: "Poll removed"
        })

    } catch (error) {
        error.status = 400
        next(error)
    }
}

exports.vote = async (req, res, next) => {
    const {
        id: pollId
    } = req.params;
    const {
        id: userId
    } = req.decoded;
    const {
        answer
    } = req.body;
    try {
        if (answer) {
            const poll = await db.Poll.findById(pollId);
            if (!poll) throw new Error('No poll found');

            const vote = poll.options.map(
                option =>
                option.title === answer ? {
                    title: option.title,
                    _id: option._id,
                    votes: option.votes + 1,
                } :
                option,
            );

            if (poll.voted.filter(user => user.toString() === userId).length <= 0) {
                poll.voted.push(userId);
                poll.options = vote;
                await poll.save();

                return res.status(202).json(poll);
            } else {
                throw new Error('Already voted');
            }
        } else {
            throw new Error('No Answer Provided');
        }
    } catch (err) {
        return next({
            status: 400,
            message: err.message,
        });
    }
};