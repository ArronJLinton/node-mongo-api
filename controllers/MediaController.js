const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Media.find()
      .then(dbMedia => res.json(dbMedia))
      .catch(err => res.status(422).json(err));
  },
  findByMatchId: function(req, res) {
    db.Media.find({'matchId': req.params.matchId})
      .then(dbMedia => res.json(dbMedia))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('POSTING NEW MEDIA OBJECT !')
    console.log(req.body)
    // let data = JSON.parse(req.params.media)

    // console.log("Media Object: ",  data);

    // let params = JSON.parse(req.params.media)
    // console.log(params)

    // const media = {
    //   type: params.type,
    //   uri: params.uri
    // };
    
    db.Media.create(req.body)
      .then(dbMedia => {
        console.log('Sucessful New Media Post !')
        res.json(dbMedia)
      })
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
