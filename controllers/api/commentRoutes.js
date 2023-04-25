const router = require('express').Router()
const { Comment } = require('../../models')
// add auth

// NEW comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
            // need to add post id
        })

        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router