const express = require('express')
const postService = require('../services/post.service')
const postRouter = express.Router()


postRouter.get('/', async (req, res) => {
    try {
        const posts = await postService.findAll()
        return res.json(posts)

    }
    catch (err) {
        res.status(500).json({ err })
    }
})

postRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await postService.findById(id)
        if (!post) {
            return res.status(500).json({ message: `Requested Post for  ${id} Not found` })
        }
        return res.status(200).json(post)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})


postRouter.post('/', async (req, res) => {
    const post = req.body
    try {
        const savedPost = await postService.save(post)
        return res.status(201).json(savedPost)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

postRouter.put('/:id', async (req, res) => {
    const postInput = req.body
    const id = req.params.id
    try {
        const post = await postService.update(id, postInput)
        return res.status(200).json(post)
    }
    catch (err) {
        res.status(500).json({ err })
    }
})

postRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await postService.remove(id)
        res.status(204).send()
    }
    catch (err) {
        res.status(404).json({ err: "Post Does not exit" })
    }
})




module.exports = postRouter
