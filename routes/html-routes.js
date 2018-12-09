const path = require('path')

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/savedarticles', (req, res) => {
        res.render('index', {saved: true})
    })
}