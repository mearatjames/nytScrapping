const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
const path = require('path')

let PORT = process.env.PORT || 3000
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytscrapping";

mongoose.connect(MONGODB_URI);
const app = express()

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

mongoose.connect("mongodb://localhost/nytscrapping", { useNewUrlParser: true })

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  })