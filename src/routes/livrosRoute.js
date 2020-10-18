const express = require("express");
const router = express.Router();
const controller = require("../controller/livrosController");

router.get("/", controller.getAll);
router.get("/livros", controller.getAll);
router.get("/:categoria", controller.getAllCategotia)
router.post("/", controller.postLivros);
router.post("/livros", controller.postLivros);
router.delete("/:id", controller.deleteLivro);
router.put("/:id", controller.putLivros)

module.exports = router;