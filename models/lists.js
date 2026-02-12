const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    trim: true, 
    minLength: 3,
    maxLength: 35
   },
  body: {
    type: Array,
    required: true, 
    // arrays have default: []
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    //required: true
  },
  addedBy: {
    type: String,
    //required: true,
    default: ""
  },
  starred: {
    type: Boolean,
    default: false, 
  },
  //will be used for ${completeCount}/list.length for progress
  completeCount: {
    type: String, 
    // use the result of a function taking an array completedItems.length by body.length presented as a string, e.g. "21/37"
    // default: countProgress(body)
    // frontend will handle stats and numbers (percentage, 21 out 37 )
  },
});

const listModel = mongoose.model("list", listSchema);
module.exports = listModel;
