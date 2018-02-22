const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.User.find()
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
//   findById: function(req, res) {
//     db.Article.findById(req.params.id)
//       .then(dbArticle => res.json(dbArticle))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
      console.log(req.params)
    const user = {
      username: req.params.user,
    };
    db.User.create(user)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
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
