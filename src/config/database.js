const mongoose =  require('mongoose')

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/todo-app'

module.exports = mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
