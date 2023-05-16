// imports
const express = require("express")

const router = express.Router()

// Define user routes

router.get("/", function (req, res) {
    res.status(200).render("index",)
})

// Export the router
module.exports = router;
