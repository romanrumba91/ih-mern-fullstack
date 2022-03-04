// 1. IMPORTACIONES
const mongoose = require("mongoose")


// 2. SCHEMA
const drinkSchema = mongoose.Schema({

	name: {
		type: String,
		required: true,
        unique:true
	},
	flavor: {
		type: String,
		required: true,
	},
    size: {
		type: String,
		required: true,
	},

},{
    timestamps:true
})

// 3. MODEL
const Drink = mongoose.model("Drink", drinkSchema)

// 4. EXPORTACIÓN
module.exports = Drink