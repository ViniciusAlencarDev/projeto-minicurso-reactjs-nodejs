const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors(['*']))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// Configurações
const configServer = require('./config/configServer.json')
const protocol = process.env.PROTOCOL || configServer.protocol;
const ip = "localhost"
const port = process.env.PORT || configServer.port;

app.listen(port, () => console.log(`
    Server started in ${protocol}://${ip}:${port}
`))
