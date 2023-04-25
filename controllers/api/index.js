const router = require('express').Router()
const postRoutes = require('./postsRoutes')

router.use('/posts', postRoutes)

module.exports = router