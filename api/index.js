'use strict'

// Change working directory for relative imports
// due to api & app being under same node package.
process.chdir('api')

const express = require('express'),
    morgan = require('morgan'),
    db = require('./server/config/db.js'),
    env = require('./server/config/env'),
    router = require('./server/router/index')

const app = express()
const PORT = env.PORT

app.use(express.json())
app.use(morgan('combined'))

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json')
    next()
})

router(app, db)

//drop and resync with { force: true }
db.sequelize.sync({force: true}).then(() => {
    // Generate default data.
    db.owners
        .create({
            name: 'Julian Edwards',
            role: 'admin',
        })
        .then((owner) => {
            db.pets.create({
                name: 'Tigerlily',
                owner_id: owner.id,
                type: 'cat',
            })
        })
    db.owners
        .create({
            name: 'Andrew Siemer',
            role: 'admin',
        })
        .then((owner) => {
            db.pets.create({
                name: 'Fido',
                owner_id: owner.id,
                type: 'dog',
            })
        })
    db.owners
        .create({
            name: 'Sarah Smith',
            role: 'user',
        })
        .then((owner) => {
            db.pets.create({
                name: 'Polly',
                owner_id: owner.id,
                type: 'parrot',
            })
        })

    app.listen(PORT, () => {
        console.log('Express API listening on port:', PORT)
    })
})
