const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Format simple
const format = {
  type: String,
  required: [true, "value is required for field."],
};

const orderSchema = mongoose.model(
  "orderSchema",
  new Schema({
    details: [
      {
        article: { type: Schema.Types.ObjectId, ref: "articles" },
        prix: { type: Number, default: 0 },
        orderDate: { type: Date, default: Date.now },
      },
    ],
  })
);

module.exports = orderSchema;
