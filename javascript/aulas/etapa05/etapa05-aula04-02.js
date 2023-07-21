const ul = document.querySelector('ul')
const button = document.querySelector('button')
const body = document.body

//ul.innerHTML += `<li>Novo Item</li>`

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = `Novo Item`
    ul.append(li)
})

ul.addEventListener('click', event => {
    const elementoClicado = event.target

    if (elementoClicado.tagName === 'LI') {
        elementoClicado.remove()
    }
    
})

body.addEventListener('click', event => {
    event.stopImmediatePropagation()
    console.log(event)
})