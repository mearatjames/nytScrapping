const React = require('react')
const Fragment = React.Fragment

const Nav = (props) => 
    <Fragment>
    <nav className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-left">
        <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="/">NYT Scrapper</a>
        <div>
            <ul className="uk-navbar-nav">
                <li className={props.saved ? "" : "uk-active"}><a href="/">Home</a></li>
            </ul>
        </div></div>
        <div className="uk-navbar-left"><div>
            <ul className="uk-navbar-nav">
                <li className={props.saved ? "uk-active" : ""}><a href="/savedarticles">Saved Articles</a></li>
            </ul>
        </div></div>
    </div>
    </nav>
    </Fragment>

module.exports = Nav