const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo")

router.get("/",todoController.find)
router.post("/",todoController.create)
router.get("/edit/:id",todoController.edit)
router.put("/update/:id",todoController.update)
router.get("/:id",todoController.find)


module.exports = router
