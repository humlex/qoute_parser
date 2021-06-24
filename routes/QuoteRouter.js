const Router = require("express");
const QuoteRouter = require("../controllers/QuoteController.js");

const router = new Router();

router.get("/quotes");
router.get("/quotes/:id");
router.post("/quotes", QuoteRouter.create);
router.put("/quotes");
router.delete("/quotes:/id", QuoteRouter.delete);

module.exports = router;
