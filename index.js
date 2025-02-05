// import express
const express = require("express")
const { console } = require("inspector")

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

app.listen(3000, () => {
    console.log("Server Started")
})

