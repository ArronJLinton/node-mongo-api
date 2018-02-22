const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Media.find()
      .then(dbMedia => res.json(dbMedia))
      .catch(err => res.status(422).json(err));
  },
  //   findById: function(req, res) {
  //     db.Article.findById(req.params.id)
  //       .then(dbArticle => res.json(dbArticle))
  //       .catch(err => res.status(422).json(err));
  //   },
  create: function(req, res) {
    // console.log('req.user: ', req.user)
    // console.log('req.params: ', req.params.media);
    const params = req.params.type;
    // const params = JSON.parse(req.params.media);
    console.log('params: ', typeof params)
    console.log(params);
    const media = {
      media: req.params.type,
      uri: req.params.uri
    };
    // res.end()

    db.Media.create(media)
      .then(dbMedia => res.json(dbMedia))
      .catch(err => res.status(422).json(err));
  }
  //   update: function(req, res) {
  //     db.Article.findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbArticle => res.json(dbArticle))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   remove: function(req, res) {
  //     db.Article.findById({ _id: req.params.id })
  //       .then(dbArticle => dbArticle.remove())
  //       .then(dbArticle => res.json(dbArticle))
  //       .catch(err => res.status(422).json(err));
  //   }
};
