const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    _id: false,
    name: {
      type: String,
      required: true,
      trim: true, 
      //match: regExp
      minLength: 3,
      maxLength: 35
    },
    count: {
      type: Number,
      max: 999
    },
    isComplete: {
      type: Boolean,
      default: false, 
      required: true
    },
    productType: {
      type: String,
      // add a validator which will help find the category of a list item
      // match: regEx
      enum: ["warzywa/owoce", "pieczywo", "nabial", "konserwy", "mieso", "chemia", "kosmetyki", "inne", "slodkie", "mrozonki"]
    },
    favorite: {
      type: Boolean,
      default: false, 
      required: true
    },
})

const taskModel = mongoose.model('taskModel', taskSchema)

module.exports = taskModel