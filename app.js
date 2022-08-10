const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

const mainRoutes = require("./routes/main")

app.use(mainRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log("It's Alive!")
})