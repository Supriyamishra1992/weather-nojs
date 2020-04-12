const path = require('path')
const express = require('express')
const hbs = require('hbs') 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forcast')

console.log(__dirname)

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPaths = path.join(__dirname,'../templates/partials')

// Setup handlerbars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPaths)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//call view file
app.get('', (req, res) => {
  res.render('index', {
    title: 'Home',
    name: 'Supriya Mishra'
  })
})

//app.get('/help', (req, res) => {
  //sending single object
  // res.send({
  //   name: 'supriya',
  //   age: 28
  // })

  //sending multiple object
  // res.send([{
  //     name: 'supriya',
  //     age: 28
  //   },
  //   {
  //     name: 'tannu',
  //     age: 29
  //   }
  // ])

//})

//call a simple page
// app.get('/about', (req, res) => {
//   res.send('About page')
// })

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    name: 'Subbi'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Subbi cute'
  })
})

//Simple way to send json format to browser
// app.get('/weather', (req, res) => {
//   res.send('Weather page')
// })

app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: 'You must provide address term'
    })
  }
  
  res.send({
    forecast: 'It is hot',
    location: 'bangalore',
    adddress: req.query.address
  })
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }
  res.send({
    products: []
  })
})

app.get('/help/*', (req,res) => {
  res.render('404', {
    title: '404 page',
    name: 'supriya',
    message: 'Help article not found'
  })
})

// 404 page check
app.get('*', (req, res) => {
  res.render('404', {
    title: '404 page',
    name: 'supriya',
    message: 'Page not found'
  })
})


// Need to start the server to view in browser
// web server never stop until we stop it.
app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})

