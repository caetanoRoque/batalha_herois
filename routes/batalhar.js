const express = require("express")
const router = express.Router()
const controller = require("./../controllers/batalhar")

router.post("/", controller.post)
router.get("/exibir", controller.get)
router.post("/times", controller.post_times)

module.exports = router