const router = require("express").Router();
const userController = require("../../controllers/UserController");

router
  .route("/new/:user")
  .post(userController.create);

router
  .route("/")
  .get(userController.findAll)

// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
