const router = require("express").Router();
const controller = require("../controller");

router.post("/save", controller.commande.save);

module.exports = router;
