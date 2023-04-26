const router = require('express').Router()
const { Comment } = require('../../models')
const withAuth = require ('../../utils/auth')

// NEW comment
router.post('/', withAuth, async (req, res) => {
    console.log('post route')
    try {
        const newComment = await Comment.create({
            body: req.body.body,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
        console.log(newComment)
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router