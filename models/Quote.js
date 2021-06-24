const mongoose = require("mongoose");

const Quote = mongoose.Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", Quote);
