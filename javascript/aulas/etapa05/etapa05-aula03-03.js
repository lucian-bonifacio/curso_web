// 3 Passos
// 1º - Query no DOM para pegar o elemento
// 2º - Adicionar ao elemento um event listener
// 3º - implementar uma função de callback que será executada quando o evenco acontecer, ou seja, quando o clique no borão acontecer

const ul = document.querySelector('ul')

//método novo abaixo
// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target

        clickedElement.remove()
    })

})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Novo item</li>'

    const li = document.createElement('li')
    li.textContent = 'Novo item'

    // método utilizado no elemento pai
    // Insere conteúdo como último filho.
    // ul.append(li)
    ul.prepend(li)
})