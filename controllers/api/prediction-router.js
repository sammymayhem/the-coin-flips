const { Prediction } = require("../../models");
const router = require("express").Router();
const withAuth = require("../../util/withAuth");

router.get("/", withAuth, async (req, res) => {
  try {
    console.log(req.params);
    const predictionData = await Prediction.findAll();
    res.status(200).json(predictionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.session.userId);

    const predictionData = await Prediction.create({
      ticker: req.body.ticker,
      start_price: req.body.start_price,
      start_time: req.body.start_time,
      predicted_price: req.body.predicted_price,
      predicted_time: req.body.predicted_time,
      user_id: req.session.userId,
    });

    res.status(200).json(predictionData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
