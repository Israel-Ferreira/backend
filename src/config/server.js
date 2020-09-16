const express =  require('express')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3003


const server =  express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))




server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})