const express =  require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('./cors')


const PORT = process.env.PORT || 3003

const server =  express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors)

require('./database')


server.use('/api',router)





server.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})