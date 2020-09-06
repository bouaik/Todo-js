const addItemsAction = document.querySelector('.addItems-action')
const input = document.querySelector('.addItems-input')
const submit = document.querySelector('.addItems-submit')

const list = document.querySelector('.grocery-list')
const displayItemsAction = document.querySelector('.displayItems-action')
const clear = document.querySelector('.displayItems-clear')

submit.addEventListener('click', addItem)
document.addEventListener('DOMContentLoaded', displaystorage)
clear.addEventListener('click', removeItems)


function addItem(e) {
    e.preventDefault()
    let value =  input.value
    if (value === '') {
        showAction(addItemsAction, 'Please add grocery item', false)
    } else {
        showAction(addItemsAction, `${value} add to the list`, true)
        createItem(value)
        updateStorage(value)
    }
}

function showAction (element, text, value) {
    if(value === true) {
        element.classList.add('success')
        element.innerText = text
        input.value = ''
        setTimeout( () => {
            element.classList.remove('success')
        }, 3000)
    } else {
        element.classList.add('alert')
        element.innerText = text
        input.value = ''
        setTimeout( () => {
            element.classList.remove('alert')
        }, 3000)
    }
}


function createItem(value) {
    let parent = document.createElement('div')
    parent.classList.add('grocery-item')

    // let title = document.createElement('h4')
    // title.classList.add('grocery-item__title')
    // title.textContent = value
    // parent.appendChild(title)

    parent.innerHTML = `<h4 class="grocery-item__title">${value}</h4>
                        <a href="#" class="grocery-item__link"><i class="far fa-trash-alt"></i></a>`

    list.appendChild(parent)
}


function updateStorage(value) {
    let groceryList

    // let exists = localStorage.getItem('groceryList')
    // if (exists) {
    //     groceryList = JSON.parse(localStorage.getItem('groceryList'))
    // } else {
    //     groceryList = []
    // }

    groceryList = localStorage.getItem('groceryList') ? JSON.parse(localStorage.getItem('groceryList')) : []

    groceryList.push(value)

    localStorage.setItem('groceryList', JSON.stringify(groceryList))
}

// localStorage.clear()


function displaystorage () {
    let exists = localStorage.getItem('groceryList')

    if(exists) {
        let storageItems = JSON.parse(localStorage.getItem('groceryList'))

        storageItems.forEach( function (element) {
            createItem(element)
        })
    }
}

function removeItems () {
    localStorage.removeItem('groceryList')
    let items = document.querySelectorAll('.grocery-item')
    
    if(items.length > 0) {
        showAction(displayItemsAction, 'All items deleted', false)
        items.forEach( (element) => {
            list.removeChild(element)
        })
    } else {
        showAction(displayItemsAction, 'no more items to delete', true)
    }
}