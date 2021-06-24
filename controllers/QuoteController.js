const Quote = require("../models/Quote.js");

class QuotesController {
  async create(req, res) {
    try {
      const { author, content } = req.body;
      const data = await Quote.create({ author, content });
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the workout.",
      });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const data = await Quote.deleteOne({
        _id: id,
      });
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the workout.",
      });
    }
  }
}

module.exports = new QuotesController();
