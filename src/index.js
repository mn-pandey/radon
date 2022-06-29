const express = require("express")
const bodyParser = require("body-parser")
const route = require("./Route/route")
const { default: mongoose } = require("mongoose")
const app = express()


app.use(bodyParser.json())


mongoose.connect("mongodb+srv://mn-pandey:9219591303Am%40n@cluster0.mov0c.mongodb.net/groupXDatabase?retryWrites=true&w=majority",)

    .then(() => console.log("MongoDB is Connected."))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express is running on port " + (process.env.PORT || 3000))
})