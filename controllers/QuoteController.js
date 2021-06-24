const Quote = require("../models/Quote.js");

class QuotesController {
  async createQuote(req, res) {
    try {
      const { author, content } = req.body;
      const data = await Quote.create({ author, content });
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the quote.",
      });
    }
  }
  async getAllQuotes(req, res) {
    try {
      const data = await Quote.find();
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while getting the quote.",
      });
    }
  }
  async findOneQuote(req, res) {
    try {
      const { id } = req.params;
      const data = await Quote.findById(id);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while finding the quote.",
      });
    }
  }
  async updateQuote(req, res) {
    try {
      const id = req.params.id;
      const { author, content } = req.body;
      const data = await Quote.findByIdAndUpdate(id, { author, content });
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the quote.",
      });
    }
  }
  async deleteOne(req, res) {
    try {
      const { id } = req.params;
      const data = await Quote.deleteOne({
        _id: id,
      });
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the workout.",
      });
    }
  }
}

module.exports = new QuotesController();
