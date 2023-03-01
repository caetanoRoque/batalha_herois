const express = require("express")
const router = express.Router()
const controller = require("./../controllers/vilao")

router.post("/cadastrar-vilao", controller.post)
router.post("/fundir", controller.fundir)

module.exports = router