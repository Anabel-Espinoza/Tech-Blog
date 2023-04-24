const router = require('express').Router()
const { Comment, User, Post } = require('../models')
// add auth

// Get all posts and print in homepage
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

// Get post by id and print in post page
router.get('/post/:id', async (req, res) => {
    try {
        const postById = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }, { model: Comment }] 
        })
        const post = postById.get({ plain: true })
        console.log(post)
        res.render('post', { post }) //NEED to add comments to that post
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/new-post', (req,res) => {
    res.render('new-post')
})
module.exports = router
