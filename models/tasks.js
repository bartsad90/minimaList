const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    _id: false,
    name: {},
    count: {},
    complete: {},
    productType: {},
    favorite: {},
    inList: {},
})

const taskModel = mongoose.model('taskModel', taskSchema)

module.exports = taskModel