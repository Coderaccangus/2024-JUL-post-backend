// import express
const express = require("express")

const postRouter = require("./routes/postRoutes")

const app = express()

// Get Method
app.get("/", (req, res) => {
    res.json({
        data: "Hello World"
    })
})

app.get("/hello", (req, res) => {
    res.json({
        data: "Another route names hello"
    })
})

app.use("/posts", postRouter)

app.listen(3000, () => {
    console.log("Server Started")
})

