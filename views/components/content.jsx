const React = require('react')
const Fragment = React.Fragment

const Content = (props) => 
    <Fragment>
        <div className="uk-inline">
            <img className="header" src="images/header.webp" alt="" />
            <div className="uk-overlay uk-overlay-default uk-position-bottom uk-text-lead uk-text-center">
                {props.saved ? 
                <Fragment>
                <p>Saved Articles</p>
                <button id="clear" className="uk-button uk-button-default">Clear All Articles</button>
                </Fragment>  :
                <Fragment>
                <p>New York Times Scrapper</p>
                <button id="scrape" className="uk-button uk-button-default">Scrape New Articles</button>
                <button id="clear" className="uk-button uk-button-default">Clear All Articles</button>
                </Fragment>
            }
            </div>
        </div>
        <div id="alert" className="uk-text-lead uk-text-center" data-uk-alert>
        {props.saved ? "No saved articles available" : " No articles to display. Please click on Scrape New Articles above"}
       </div>
        <div id="articles" className="uk-child-width-1-2@m" data-uk-grid>
        </div>
    </Fragment>

module.exports = Content