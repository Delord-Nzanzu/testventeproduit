const models = require("../model");

module.exports = {
  save: (req, res) => {
    models.personne.insertOne({}).then((rlt) => {});
  },
};
