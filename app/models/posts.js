// Example model

var mongoose = require('mongoose'),
  	Schema = mongoose.Schema;

var PostsSchema = new Schema({
	type: String,
	status: {
        type: String, default: "brouillon"
    },
	category: String,
	title: String,
	texte: String,
	from: Date,
	to: Date,
	image: {type: Schema.Types.ObjectId, ref: 'Attachments'},
	slug: String,
	link: String,
	post_order: Number,
},{
    timestamps: true
});

mongoose.model('Posts', PostsSchema);