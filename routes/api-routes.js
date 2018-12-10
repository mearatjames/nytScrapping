const path = require('path')
const axios = require("axios")
const cheerio = require("cheerio")
const mongoose = require('mongoose')
const db = require('../models')

module.exports = function(app) {
    app.get('/scrape', (req, res) => {
        axios.get("https://www.nytimes.com/section/technology").then(function(response) {
        const $ = cheerio.load(response.data)
        let articlesArr = []
        $('section#stream-panel div:first-child ol li').each((i, elem) => {
            articlesArr.push({
                link: `https://www.nytimes.com${$(elem).find('a').attr('href')}`,
                title: $(elem).children('div').children().children('a').children('h2').text(),
                text: $(elem).children('div').children().children('a').children('p').text(),
                image: $(elem).find('img').attr('src')
            })
        })
        db.Article.create(articlesArr, function (err, data) {
            if (err) console.log(err)
        })
        res.send(articlesArr)
        })
    })

    app.get("/articles", function(req, res) {
        db.Article.find({})
          .then(function(dbArticle) {
            res.json(dbArticle)
          })
          .catch(function(err) {
            res.json(err)
          })
        })
    
    app.delete('/articles', function(req, res) {
        db.Article.remove({})
        .then(function(result) {
          return db.Note.remove({})
        })
        .then(function(response) {
            res.sendStatus(200)
        })
    })

    app.put('/articles/:id', function(req, res) {
        db.Article.findOneAndUpdate({_id: req.params.id}, {saved: false})
        .then(function(result) {
            res.sendStatus(200)
        })
    })

    app.put('/article', function (req, res) {
        db.Article.findOneAndUpdate({_id: req.body.id}, {saved: true}, function(err, doc) {
            if (err) throw err
            console.log(doc)
            res.sendStatus(200)
        })
    })

    app.get('/api/savedarticles', function (req, res) {
        db.Article.find({saved: true})
        .then(function(savedArticles) {
            res.json(savedArticles)
        })
    })

    app.get('/articles/:id', function (req, res) {
        db.Note.find({article: req.params.id})
        .then(function(note) {
            res.json(note)
        })
    })

    app.post('/articles/:id', function(req, res) {
        db.Note.create(req.body)
        .then(function(note) {
            res.json(note)
        })
        .catch( e => console.log(e))
    })

    app.delete('/notes/:id', function(req, res) {
        db.Note.deleteOne({_id: req.params.id})
        .then(function(response) {
            res.sendStatus(200)
        })
        .catch(e => console.log(e))
    })
}
