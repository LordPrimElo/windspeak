const router = require("express").Router()

const history = {
    messages: [
        {
            text: "Hello! I'm Evan! Wassup my g, I'm here to paratayyyy babyeeyeyeyeyyey ehehehhehe so when's the paraty tell me son",
            isSentByYou: false
        },
        {
            text: "Wassup?",
            isSentByYou: true
        },
        {
            text: "Nothing much, hbu?",
            isSentByYou: false
        },
        {
            text: "Same bruh",
            isSentByYou: true
        },
        {
            text: "lol",
            isSentByYou: true
        }
    ]
}

// GET
router.get("/", (req, res) => {
    res.render("index", { history })
})

// POST
router.post("/", (req, res) => {
    const newMessage = {
        text: req.body.send,
        isSentByYou: true
    }
    history.messages.push(newMessage)
    res.render("index", { history })
})

module.exports = router