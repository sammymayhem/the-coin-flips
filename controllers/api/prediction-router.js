const { Prediction } = require("../../models");
const router = require("express").Router();

router.get("/", async (req, res)=> {
    try {
        const predictionData = await Prediction.findAll();
        res.status(200).json(predictionData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res)=> {
    try {
        const predictionData = await Prediction.create({
            ticker: req.body.ticker,
            start_price:  req.body.start_price,
            start_time: req.body.start_time,
            predicted_price: req.body.predicted_time,
            predicted_time: req.body.predicted_time
        });
        res.status(200).json(predictionData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/ticker", async (req, res) => {
    const ticker = req.body.tickerText;

    console.log(ticker);
    res.json("okay");
    // api call
})

module.exports=router;



