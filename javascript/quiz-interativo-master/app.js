const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['A', 'D', 'B', 'C']

let score = 0

const getUserAnswers = () => {
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    return userAnswers
}

const calculateUserScore = (userAnswers) => {
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
}

const showFinalResult = () => {
    scrollTo(0, 0)
    finalResult.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0
    const timer  = setInterval(() => {
        if(counter === score){
            clearInterval(timer)
        }
        
        finalResult.querySelector('span').textContent = `${counter}%`
        counter++

    }, 50)
}

const submitForm = event => {
    event.preventDefault()

    // Obtém as respostas do usuário
    const userAnswers = getUserAnswers()
    
    // Calcula a pontuação do usuário
    calculateUserScore(userAnswers)

    // Exibe a pontuação final
    showFinalResult()

    // Anima a pontuação final
    animateFinalScore()
}

form.addEventListener('submit', submitForm)

