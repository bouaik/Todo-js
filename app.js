const addItemsAction = document.querySelector('.addItems-action')
const input = document.querySelector('.addItems-input')
const submit = document.querySelector('.addItems-submit')

const list = document.querySelector('.grocery-list')
const displayItemsAction = document.querySelector('.displayItems-action')
const clear = document.querySelector('.displayItems-clear')

submit.addEventListener('click', addItem)

function addItem(e) {
    e.preventDefault()
    let value =  input.value
    if (value === '') {
        
    } else {

    }
}