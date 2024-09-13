const Post = require('../models/post.model')

class PostService {

    async findAll() {
        return await Post.find()
    }

    async findById(id) {
        const post = await Post.findOne({ _id: id })
        return post
    }
    async save(post) {
        const newPost = new Post({ title: post.title, content: post.content })
        await newPost.save()
        return newPost
    }
    async update(id, post) {
        //get Post document
        const newPost = await Post.findOne({ _id: id })
        if (!newPost) {
            throw Error()
        }
        if (post.title) {
            newPost.title = post.title
        }
        if (post.content) {
            newPost.content = post.content
        }
        await newPost.save()
        return newPost
    }

    async remove(id) {
        const post = await Post.findOne({ _id: id })
        if (post) {
            await Post.deleteOne({ _id: id })
        } else {
            throw Error()
        }
    }
}
module.exports = new PostService()
