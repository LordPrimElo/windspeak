const router = require("express").Router()

// GET
router.get("/", (req, res) => {
    res.render("index")
})

// POST
router.post("/", (req, res) => {
    res.render("index")
})

module.exports = router