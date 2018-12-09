fetch('/api/savedarticles')
.then(r => r.json())
.then(data => {
    if (data.length == 0) {
        document.getElementById('alert').style.display = "block"
    } else {
        for (i=0; i <data.length; i++) {
            document.getElementById('alert').style.display = "none"
            document.getElementById('articles').insertAdjacentHTML("afterbegin", `
            <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img height="50" src=${data[i].image}>
                </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${data[i].title}</h3>
                    </div>
                </div>
                <button class="uk-align-right" type="button" data-uk-close data-uk-tooltip="Remove Article"></button>
            </div>
            <div class="uk-card-body">
                <p>${data[i].text}</p>
            </div>
            <div class="uk-card-footer">
                <a href=${data[i].link} class="uk-button uk-button-text">Read more</a>
                <button data-id=${data[i]._id} onclick="saveArticle(event)" class="uk-align-right uk-button uk-button-default">Notes</button>
            </div>
            </div>
                    `) 
        }
    }
})
.catch(e => console.log(e))