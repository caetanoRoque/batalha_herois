const express = require("express")
const router = express.Router()
const controller = require("./../controllers/batalhar")

router.post("/", controller.post)
router.get("/exibir", controller.get)

module.exports = router