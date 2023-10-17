const express = require('express')
const router = express.Router()
const users = require("./users.js")
const movies = require("./movies.js")
// middleware that is specific to this router
router.use((req, res, next) => {
    next()
})
router.use("/users", users)
router.use("/movies",movies)

// define the home page route
router.get('/', (req, res) => {
  res.send(200)
})

module.exports = router
