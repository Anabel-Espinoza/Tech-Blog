const router = require('express').Router()
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth')

// NEW comment
router.post('/', withAuth, async (req,res) => {
    try {
        console.log('-----post route------', req.body.text_comment, req.body.post_id, req.session.user_id)
        const newComment = await Comment.create({
            ...req.body,
            // text_comment: req.body.text_comment,
            // post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
        console.log(newComment)
        res.status(200).json(newComment)
    } catch (err) {
        console.log('error -----------')
        res.status(400).json(err)
    }
})

module.exports = router