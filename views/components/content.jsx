const React = require('react')
const Fragment = React.Fragment

const Content = (props) => 
    <Fragment>
        <div className="content uk-inline">
            <img className="header" src="images/header.webp" alt="" />
            <div className="uk-overlay uk-overlay-default uk-position-bottom uk-text-lead uk-text-center">
                {props.saved ? 
                <Fragment>
                <p>Saved Articles</p>
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
        <div id="modal-sections" data-uk-modal>
            <div className="uk-modal-dialog">
                <button className="uk-modal-close-default" type="button" data-uk-close></button>
                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">Saved Notes</h2>
                </div>
                <div className="uk-modal-body">
                    <div id="noteList" className="uk-margin"></div>
                    <div className="uk-margin">
                        <textarea id="note" class="uk-textarea" rows="5" placeholder="Input Notes Here"></textarea>
                    </div>
                </div>
                <div className="uk-modal-footer uk-text-right">
                    <button id="saveNote" className="uk-button uk-button-primary" type="button">Save</button>
                </div>
            </div>
        </div>

    </Fragment>

module.exports = Content