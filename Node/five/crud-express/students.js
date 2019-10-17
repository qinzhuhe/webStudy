var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/itcast')

var Schema = mongoose.Schema

var sutdentSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: Number,
		enum: [0, 1],
		default: 0
	},
	age: {
		type: Number
	},
	hobbies: {
		type: String
	}
})

module.exports = mongoose.model('Student', sutdentSchema)