const React = require('react')
const Nav = require('./components/nav')
const Content = require('./components/content')
const Footer = require('./components/footer')
// const Header = require('./components/header')



const Page = (props) =>
    <html lang='en'>
    <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.25/css/uikit.min.css" />
        <link rel="stylesheet" href="/app.css" />
        <title>NYT Scraper</title>
    </head>
        <body>
            <Nav saved={props.saved} />
            <Content saved={props.saved} />
            <Footer />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.25/js/uikit.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.25/js/uikit-icons.min.js" />
            {props.saved ? <script src='/saved.js' /> : <script src='/app.js' /> }
        </body>
    </html>

module.exports = Page