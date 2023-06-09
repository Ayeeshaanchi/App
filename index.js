//Imports
require('dotenv').config()
const express = require("express")
const app = express()
const path = require('path')

//Page routes
const home = require('./app/home')

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Set the view engine to EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Serve static files from a public folder
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/', home)

// if port exist then run else deploy on vercel
if (process.env.PORT) {
    // Start the server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
} else
    app.listen()