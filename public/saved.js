let noteList = document.getElementById('noteList')
let alert = document.getElementById('alert')
let saveNote = document.getElementById('saveNote')
let note = document.getElementById('note')


fetch('/api/savedarticles')
.then(r => r.json())
.then(data => {
    if (data.length == 0) {
        alert.style.display = "block"
    } else {
        for (i=0; i <data.length; i++) {
            alert.style.display = "none"
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
                <button onclick=removeArticle("${data[i]._id}") class="uk-align-right" type="button" data-uk-close data-uk-tooltip="Remove Article"></button>
            </div>
            <div class="uk-card-body">
                <p>${data[i].text}</p>
            </div>
            <div class="uk-card-footer">
                <a href=${data[i].link} class="uk-button uk-button-text">Read more</a>
                <button data-id=${data[i]._id} onclick=getNote("${data[i]._id}") class="uk-align-right uk-button uk-button-default" uk-toggle="target: #modal-sections">Notes</button>
            </div>
            </div>
                    `) 
        }
    }
})
.catch(e => console.log(e))

function removeArticle(id) {
    console.log(id)
    let event = window.event
    let target = event.target
    fetch('/articles/' + id, {
        method: 'PUT'
    })
    .then(response => {
        console.log(response)
        target.parentElement.parentElement.parentElement.remove()
    })
}

function getNote(id) {
    saveNote.setAttribute('data-id', id)
    noteList.innerHTML = ""
    fetch('/articles/' + id)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        data.forEach(element => { 
            noteList.insertAdjacentHTML('afterbegin', `
            <div>
            <button onclick=removeNote("${element._id}") class="uk-align-right" type="button" data-uk-close data-uk-tooltip="Remove Note"></button>
            <p>${element.body}</p>
            </div>
            `)
        })
    })
}

function removeNote(id) {
    console.log(id)
    let event = window.event
    let target = event.target
    fetch('/notes/' + id, {
        method: 'DELETE'
    })
    .then(response => {
        target.parentElement.parentElement.remove()
    })
}

saveNote.addEventListener('click', function() {
    let id = saveNote.getAttribute('data-id')
    if (note.value == "") return
    fetch('/articles/' + id, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            body: note.value.trim(),
            article: id
        })
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        note.value = ""
        noteList.insertAdjacentHTML('afterbegin', `
        <div>
        <button onclick=removeNote("${data._id}") class="uk-align-right" type="button" data-uk-close data-uk-tooltip="Remove Note"></button>
        <p>${data.body}</p>
        </div>
        `)
    })  
})