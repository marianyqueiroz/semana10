const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradoresController");

router.get("/", controller.getAll);
router.get("/colaboradores", controller.getAll);
router.get("/:id", controller.GetById)
router.post("/", controller.postcolaboradores);
router.post("/colaboradores", controller.postcolaboradores);
router.delete("/:id", controller.deleteColaboradores);
router.put("/:id", controller.putLivros);
router.patch("/:id", controller.patchColaboradores);

module.exports = router;