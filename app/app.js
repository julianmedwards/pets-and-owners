'use strict'

// Change working directory for relative imports
// due to api & app being under same node package.
process.chdir('app')

const express = require('express'),
    morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('combined'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
    const ownersReq = await fetch('http://localhost:5000/owners', {
        method: 'GET',
    })

    const data = await ownersReq.json()
    res.header('Content-Type', 'text/html')
    res.render('index', {data})
})

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('Express APP listening on port:', PORT)
})
