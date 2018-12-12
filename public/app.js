document.addEventListener('DOMContentLoaded', function() {
    getArticles()
})

function getArticles() {

    fetch('/articles')
    .then(response => response.json())
    .then(data => {

        if (data.length == 0) {
            document.getElementById('alert').style.display = "block"
        }
        for (i = 0; i < data.length; i++) {
            if (i < 10) {
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
                </div>
                <div class="uk-card-body">
                    <p>${data[i].text}</p>
                </div>
                <div class="uk-card-footer">
                    <a href=${data[i].link} class="uk-button uk-button-text">Read more</a>
                    ${data[i].saved == true ? 
                        `<button disabled data-id=${data[i]._id} onclick="saveArticle(event)" class="uk-align-right uk-button uk-button-default">Saved!</button>` : 
                        `<button data-id=${data[i]._id} onclick="saveArticle(event)" class="uk-align-right uk-button uk-button-default">Save</button>`
                        }
                </div>
                </div>
                        `) 
            }
        }
    })
}

document.getElementById('scrape').addEventListener('click', function() {
    fetch('/scrape/')
    .then(response => getArticles())
    .catch(e => console.log(e))
})

document.getElementById('clear').addEventListener('click', function() {
    fetch('/articles', {
        method: 'DELETE'
    })
    .then(response => {
        document.getElementById('articles').innerHTML = ""
    })
})

function saveArticle(e) {
    e = e || window.event
    let target = e.target || e.srcElement
    target.disabled = true
    target.innerText = 'Saved!'
    let id = target.getAttribute('data-id')
    fetch('/article', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            id: id
        })
    })
    .then(r => {})
    .catch(e => console.log(e))
}