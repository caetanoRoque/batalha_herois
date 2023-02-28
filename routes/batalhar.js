const express = require("express")
const router = express.Router()
const controller = require("./../controllers/batalhar")

router.post("/", controller.post)

module.exports = router