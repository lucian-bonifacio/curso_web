const form  = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(form.username.value)
})

const username = 'lucian123'
const pattern = /^[a-z]{6,}$/

result = pattern.test(username)

if(result){
    console.log('o teste regex passou :)')
} else{
    console.log('o teste regez não passou =(')
}