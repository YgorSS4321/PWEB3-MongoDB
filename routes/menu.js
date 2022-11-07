const express = require("express");
const router = express.Router();
const colController = require("../controllers/colunaController");

router.get("/", colController.list);
router.get("/show/:animalId/", colController.show);
router.get("/create/", colController.create);
router.post("/create/", colController.create);
router.post("/:animalId/update", colController.update);
router.get("/:animalId/update", colController.update);
router.get("/:animalId/delete", colController.delete);

module.exports = router;