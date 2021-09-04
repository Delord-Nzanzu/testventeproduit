const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Format simple
const format = {
  type: String,
  required: [true, "value is required for field."],
};

const boncommandeschema = mongoose.model(
  "boncommandeschema",
  new Schema({
    personne: { type: Schema.Types.ObjectId, ref: "personnes" },
    ordered: { type: Schema.Types.ObjectId, ref: "orders" },
    prix: { type: Number, default: 0 },
    orderDate: { type: Date, default: Date.now },
  })
);

module.exports = boncommandeschema;
