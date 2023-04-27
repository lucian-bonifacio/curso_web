// Criando um objeto literal
let user = {
    name: 'João',
    age: '31',
    email: 'joao@eggs.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de eggs']
}

console.log(user.name) // notação de ponto
console.log(user.age)

user.age = 21
console.log(user.age)

console.log(user['email']) // notação de colchete

console.log(user['name'])
user['name'] = 'José'
console.log(user['name'])

// Na notação de colchete eu posso usar variáveis que contenham uma string