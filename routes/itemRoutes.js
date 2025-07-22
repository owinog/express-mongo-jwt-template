const express = require("express");
const router = express.Router();
const itemCtrl = require("../controllers/itemController");
const { verifyToken } = require("../middleware/auth");

router.get("/", verifyToken, itemCtrl.getItems);
router.post("/", verifyToken, itemCtrl.addItem);
router.put("/:id", verifyToken, itemCtrl.updateItem);
router.delete("/:id", verifyToken, itemCtrl.deleteItem);

module.exports = router;
