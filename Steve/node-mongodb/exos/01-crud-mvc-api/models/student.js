var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  firstname:  String,
  lastname: String,
  address:   String,
  date: { type: Date, default: Date.now },
  rating: Number,
  hidden: Boolean,
  meta: {
    votes: { type : Number, default : 0 },
    favs:  Number
  }
});

module.exports = mongoose.model('Student', schema);