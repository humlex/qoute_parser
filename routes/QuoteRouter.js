const Router = require("express");
const QuoteRouter = require("../controllers/QuoteController.js");

const router = new Router();

router.get("/quotes", QuoteRouter.getAllQuotes);
router.get("/quotes/:id", QuoteRouter.findOneQuote);
router.post("/quotes", QuoteRouter.createQuote);
router.put("/quotes/:id", QuoteRouter.updateQuote);
router.delete("/quotes/:id", QuoteRouter.deleteOne);

module.exports = router;
