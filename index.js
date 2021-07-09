const express = require('express')
const ejs = require('ejs')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static('public'))

//Registrieren wir die View Engine
app.set('view engine', 'ejs')
//app.set('view engine', "pug")
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})