const express = require("express")
const router = express.Router()
const controller = require("./../controllers/heroi")

router.post("/cadastrar-heroi", controller.post)
router.post("/fundir", controller.fundir)

module.exports = router