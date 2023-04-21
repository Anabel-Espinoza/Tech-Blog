const router = require('express').Router()
const { Comment, User, Post } = require('../models')
// add auth

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll()
        res.status(200).json(allPosts)
        // const posts = allPosts.map((post) => posts.get({ plain: true }))
        // res.render('homepage')
    } catch (err) {
        res.status(500).json(err)
    }
})

