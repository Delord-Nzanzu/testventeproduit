const router = require("express").Router();
const controller = require("../controller");

router.post("/save", controller.article.save);

module.exports = router;
