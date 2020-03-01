const { Schema, model } = require('mongoose');

const devSchema = new Schema(
	{
		nome: {
			type: String,
			required: true
		},
		user: {
			type: String,
			required: true
		},
		bio: String,
		avatar: {
			type: String,
			require: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = model('dev', devSchema);
