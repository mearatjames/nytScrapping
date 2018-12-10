const mongoose = require("mongoose");


const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean
    }
})

const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article