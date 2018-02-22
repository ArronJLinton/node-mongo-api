const router = require("express").Router();
const mediaController = require("../../controllers/MediaController");

// Matches with "/api/articles"
router
    .route("/new/:type/:uri")
    .post(mediaController.create);

router
    .route("/")
    .get(mediaController.findAll);

// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
