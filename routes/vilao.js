const express = require("express")
const router = express.Router()
const controller = require("./../controllers/vilao")

router.post("/cadastrar-vilao", controller.post)

module.exports = router