const model = require("../model/article");

module.exports = {
  // All artcles
  articles: async (req, res, next) => {
    model
      .find(function (err, data) {
        if (err) res.status(404).json(error);
        res.status(200).json(data);
      })
      .sort({ _id: -1 });
  },
  // Add article
  article: async (req, res, next) => {
    const value = new model(req.body);
    await value.save(function (err) {
      if (err) res.status(404).json(error);
      next();
    });
  },
};
