// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: String,
  texte: String,
  url: String
});



mongoose.model('Article', ArticleSchema);

