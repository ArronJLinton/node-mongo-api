const router = require("express").Router();
const mediaController = require("../../controllers/MediaController");

// Matches with "/api/media"
router
    .route("/new")
    .post(mediaController.create);

router
    .route("/")
    .get(mediaController.findAll);

// Matches with "/api/articles/:id"
router
  .route("/:matchId")
  .get(mediaController.findByMatchId)
//   .put(articleController.update)

router
  .route("/deleteAll")  
  .delete(mediaController.remove);

module.exports = router;
