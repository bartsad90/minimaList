const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    name: {},
    body: {},
    createdAt: {},
    addedBy: {},
    starred: {},
    //will be used for ${completeCount}/list.length for progress
    completeCount: {},
})

const listModel = mongoose.model('list', listSchema)
module.exports = listModel