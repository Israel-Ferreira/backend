const {Router} = require('express')
const TodoService = require('../services/TodoService')


const router = Router()

TodoService.register(router, '/todos')

module.exports = router;