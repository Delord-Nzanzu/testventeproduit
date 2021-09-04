const models = require("../model");

module.exports = {
  save: (req, res) => {
    models.article
      .insertOne({
        produit: req.body.produit,
        quantite: parseInt(req.body.quantite),
        prixdevente: parseInt(req.body.prixdevente),
      })
      .then((rslt) => {
        res.json(rslt);
      })
      .catch((error) => {
        res.status(404).json(error);
      });
  },
};
