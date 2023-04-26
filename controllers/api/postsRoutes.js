const router = require('express').Router()
const { Post } = require('../../models')
// Add Auth 

router.post('/', async (req,res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err)
    }
})

// Check update route !
router.put('/:id', async (req, res) => {
    try {
        const postToUpdate = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
       })
       res.status(200).json(postToUpdate)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const postToDelete = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })

        if(!postToDelete) {
            res.status(404).json({ message: 'No post found' })
            return
        }

        res.status(200).json(postToDelete)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router