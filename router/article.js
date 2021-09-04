const router = require("express").Router();
const controller = require("../controller");

router.get("/", controller.article.articles);
router.post("/", controller.article.article, controller.article.articles);
module.exports = router;
