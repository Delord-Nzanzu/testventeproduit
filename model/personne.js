const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Format simple
const format = {
  type: String,
  required: [true, "value is required for field."],
};

const personneSchema = mongoose.model(
  "personneSchema",
  new Schema({
    // autre champ Ex: nom,prenom, email
    identite: String,
    adresse: [
      {
        commune: format,
        avenue: format,
        quartier: format,
        number: { type: Number, default: 0 },
        unique: [true, "adresse already exist."],
      },
    ],
  })
);

module.exports = personneSchema;
