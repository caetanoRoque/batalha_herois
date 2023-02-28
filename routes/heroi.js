const express = require("express")
const router = express.Router()
const controller = require("./../controllers/heroi")

router.post("/cadastrar-heroi", controller.post)

module.exports = router