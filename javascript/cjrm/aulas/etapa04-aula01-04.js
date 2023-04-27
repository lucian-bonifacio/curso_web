const posts = [
    { title: 'Empadão de frango', likes: 30 },
    { title: '4 receitas de eggs', likes: 50 }
]

let user = {
    name: 'João',
    age: '31',
    email: 'joao@eggs.com',
    city: 'São Paulo',
    blogPosts: [
        { title: 'Empadão de frango', likes: 30 },
        { title: '4 receitas de eggs', likes: 50 }
    ],
    login: function () {
        console.log('Usuário Logado')
    },
    logout: function () {
        console.log('Usuário deslogado')
    },
    logBlogPosts: function () {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(posts => {
            console.log(posts.title, posts.likes)
        })
    }
}

console.log(posts)
user.logBlogPosts()

