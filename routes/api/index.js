const router = require("express").Router();
const userRoutes = require("./users");
const mediaRoutes = require("./media");

// USER ROUTES
router.use("/users", userRoutes);

// MEDIA ROUTES
router.use("/media", mediaRoutes);

module.exports = router;
