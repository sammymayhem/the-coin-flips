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
        const predictionData = await Prediction.create(req.body);
        res.status(200).json(predictionData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports=router;



