const router = require("express").Router();
const usersRouter = require("./users-router");
const predictionRouter = require("./prediction-router");

router.use("/users", usersRouter);
router.use("/prediction", predictionRouter);

module.exports = router;
