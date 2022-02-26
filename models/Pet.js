// ./models/User.js

// 1. IMPORTACIONES
const mongoose = require("mongoose")


// 2. SCHEMA
const PetSchema = mongoose.Schema({

	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},

})

// 3. MODEL
const Pet = mongoose.model("Pet", PetSchema)

// 4. EXPORTACIÓN
module.exports = Pet