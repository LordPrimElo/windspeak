const mongoose = require("mongoose")

const historySchema = new mongoose.Schema({
    messages: [
        {
            text: String,
            isSentByYou: Boolean
        }
    ]
})

module.exports = mongoose.models("history", historySchema)