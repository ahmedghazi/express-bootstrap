// Example model

var mongoose = require('mongoose'),
  	Schema = mongoose.Schema;

var UsersSchema = new Schema({
    email: {
        unique: true,
        index: true,
        type: String
    },
    password: String,
    type: String,
    name: String
},{
    timestamps: true
});


mongoose.model('Users', UsersSchema);

