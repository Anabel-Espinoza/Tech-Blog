const router = require('express').Router()
const { Comment, User, Post } = require('../models')
// add auth

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            include: [ { model: User, attributes: ['username'] }]
        })
        // res.status(200).json(allPosts)
        const posts = allPosts.map((post) => post.get({ plain: true }))
        console.log(posts)
        res.render('homepage', { posts })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
