const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order = mongoose.model(
  "order",
  new Schema({
    // tes champs
    produit: String,
    quantite: String,
    prixdevente: { type: Number, default: 0 },
  })
);

module.exports = order;
