const form  = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
    event.preventDefault()

    const usernameInput = event.target.username
    const usernameRegex = /^[a-zA-Z]{6,12}$/
    const isAValidUsername = usernameRegex.test(usernameInput.value)

    if(isAValidUsername){
        feedback.textContent = 'Nome Válido!'
        // event.target.feedback.textContent = 'Nome Válido!'
        // console.log(event.target)
    } else{
        feedback.textContent = 'Nome inválido! Você deve inserir de 6 a 11 caracteres.'
    }

    // usernameInput.focus
})

form.username.addEventListener('keyup', event => {

    const usernameRegex = /^[a-zA-Z]{6,12}$/
    const isAValidUsername = usernameRegex.test(event.target.value)

    if(isAValidUsername){
        form.username.setAttribute('class', 'success')

    } else{
        form.username.setAttribute('class', 'error')
    }

})
