const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema 🔥
const PoemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  body:{
    type: String,
    required:true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  handle:{
    type: String,
  },

});
// To have accsess this under name of Poem, and that is = to a mongo model, name = poem and schema = PoemSchema
module.exports = Poem = mongoose.model('poem', PoemSchema)