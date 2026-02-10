const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true, 
    //match: regExp
    minLength: 3,
    maxLength: 35
   },
  body: {
    type: Array,
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  addedBy: {
    type: String,
    required: true,
    default: ""
  },
  starred: {
    type: Boolean,
    default: false, 
    required: true
  },
  //will be used for ${completeCount}/list.length for progress
  completeCount: {
    type: Number, 
    // use the result of a function taking an array completedItems.length by body.length presented as a string, e.g. "21/37"
    // default: countProgress(body)
  },
});

const listModel = mongoose.model("list", listSchema);
module.exports = listModel;
