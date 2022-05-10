const router = require("express").Router();
const usersRouter = require("./users-router");
const predictionRouter = require("./prediction-router");
const exampleRouter = require("./example-router");

router.use("/users", usersRouter);
router.use("/prediction", predictionRouter);
router.use("/example", exampleRouter);

module.exports = router;
