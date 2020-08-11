const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// Configurações
const configServer = require('./config/configServer.json')
const protocol = process.env.PROTOCOL || configServer.protocol;
const ip = "localhost"
const port = process.env.PORT || configServer.port;

app.listen(3333, () => console.log(`
    Server started in ${protocol}://${ip}:${port}
`))
