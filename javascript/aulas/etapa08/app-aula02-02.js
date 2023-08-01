const names = ['Cristian', 'Alfredo', 'Edson']

names.sort()

console.log(names)

const scores = [10, 50, 20, 5, 35, 70, 45]
scores.sort((score1, score2) => {
    return score2 - score1
})

console.log(scores)


const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2) => {
    return item2.score - item1.score 
})

console.log(theBigFamily)

/* Aqui possui uma putaria do retorno da função ter que ser ou > 0, ou < 0 ou ===0*, ou seja, são esses retorno que implicarão na rodem que os elementos serão organizados, conforme exemplos acima.*/