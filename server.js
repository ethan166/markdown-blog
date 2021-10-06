const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog')
// ejs is for different view 
// view engine ejs - convert the code into html
app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended: false})) // to access parameters in article form inside article route

app.get('/', (req, res) => {
    //res.send('Hello World')
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description'
    }
] // array with one object in it
    res.render('articles/index', {articles : articles})
})
app.use('/articles', articleRouter)
app.listen(5000)
