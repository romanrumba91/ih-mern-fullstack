const express		= require("express")
const router		= express.Router()

const drinkController	= require("./../controllers/drinksController")

router.post("/", drinkController.createDrink)

router.get("/", drinkController.getDrinks)

module.exports = router