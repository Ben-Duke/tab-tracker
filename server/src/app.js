console.log('Hello')
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const { sequelize } = require('./models')

const app = express()
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())


require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`server started on port ${config.port}`)
    })

