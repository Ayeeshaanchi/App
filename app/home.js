// imports
const express = require("express")

const router = express.Router()

// getting blog data
const blog_data = require('../blog_data')

// Define user routes

router.get("/", function (req, res) {
    res.status(200).render("index", { blog_data })
})

// Export the router
module.exports = router;
