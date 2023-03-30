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

const defaultData = [
    {
        name: 'Julian Edwards',
        role: 'admin',
        pets: [
            {name: 'Tigerlily', type: 'cat'},
            {name: 'Ginger', type: 'cat'},
        ],
    },
    {
        name: 'Frank Zappa',
        role: 'admin',
        pets: [{name: 'Fido', type: 'dog'}],
    },
    {
        name: 'Erik de Jong',
        role: 'user',
        pets: [{name: 'Picasso', type: 'cat'}],
    },
    {
        name: 'Sarah Smith',
        role: 'user',
        pets: [
            {name: 'Polly', type: 'Parrot'},
            {name: 'Bluestar', type: 'cat'},
        ],
    },
    {
        name: 'Monica Dames',
        role: 'user',
        pets: [
            {name: 'Wobke', type: 'dog'},
            {name: 'Mona', type: 'cat'},
            {name: 'Dodger', type: 'cat'},
        ],
    },
    {
        name: 'Peter Kunst',
        role: 'user',
        pets: [{name: 'Rex', type: 'dog'}],
    },
    {
        name: 'Leo Lemniscaat',
        role: 'user',
        pets: [{name: 'Bernard', type: 'dog'}],
    },
]

//drop and resync with { force: true }
db.sequelize.sync({force: true}).then(() => {
    // Generate default data.
    defaultData.forEach((owner) => {
        db.owners
            .create({
                name: owner.name,
                role: owner.role,
            })
            .then((ownerInst) => {
                owner.pets.forEach((pet) => {
                    db.pets.create({
                        name: pet.name,
                        owner_id: ownerInst.id,
                        type: pet.type,
                    })
                })
            })
    })

    app.listen(PORT, () => {
        console.log('Express API listening on port:', PORT)
    })
})
