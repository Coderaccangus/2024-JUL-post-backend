const express = require("express")

const { getPosts } = require("../controllers/postControllers")

const postRouter = express.Router()


postRouter.get("/", (req, res) => {
    const posts = getPosts()
    res.json(posts)
})


// default export 
module.exports = postRouter