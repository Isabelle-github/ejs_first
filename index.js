const express = require('express')
const ejs = require('ejs')
const app = express()
const PORT = process.env.PORT || 3000
const dataGallery = require('./data.json')
const dataNews = require('./news.json')
app.use(express.static('public'))

//Registrieren wir die View Enginegit commi
app.set('view engine', 'ejs')
// app.set('views', 'foldername')
//app.set('view engine', "pug")

//Home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})
//About page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About', news: dataNews })
})
//Team page
app.get('/team', (req, res) => {
    res.render('team', { title: 'Team' })
})
//Contact page
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' })
})
//Gallery page
app.get('/gallery', (req, res) => {
    res.render('gallery', { title: 'Gallery', datas: dataGallery })
})
//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})