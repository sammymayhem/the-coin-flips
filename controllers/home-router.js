const router = require("express").Router();
const { User, Prediction } = require("../models");
const withAuth = require("../util/withAuth");
const moment = require("moment");
const fetch = require("node-fetch");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
    res.render("home", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up Page" });
});

router.get("/predictions", async (req, res) => {
  try {
    if ("tickerText" in req.query) {
      res.render("predictions", {
        title: "Prediction",
        active: true,
        ticker: req.query.tickerText.toUpperCase(),
      });
    } else {
      res.render("predictions", { title: "Prediction", active: false });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/chart", withAuth, async (req, res) => {
  console.log("asdlkfjasdf");
  const ticker = req.body.ticker;
  const tMonthAgo = moment().subtract(1, "months").format("YYYY-MM-DD");
  const tCurrent = moment().format("YYYY-MM-DD");
  const pgUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${tMonthAgo}/${tCurrent}?adjusted=true&sort=asc&apiKey=${process.env.PG_KEY}`;

  const response = await fetch(pgUrl);
  const rawdata = await response.json();

  // NEED TO ADD MORE TO SEND INFO TO CLIENT
  if (!rawdata.results) {
    res.status(400).send("⛔ Invalid Ticker.");
    return;
  }

  let x = [];
  let y = [];

  rawdata.results.forEach((obj) => {
    y.push(obj.c);
    x.push(obj.t);
  });

  const last = x[x.length - 1];
  const xLength = x.length;
  for (let i = 1; i < xLength; i++) {
    x.push(last + i * 86400000);
  }

  const data = {
    ticker,
    x,
    y,
  };

  res.json(data);
});

router.get("/portfolio", withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const predictionData = await Prediction.findAll({
      where: {
        user_id: req.session.userId,
      },
      order: [["start_time", "DESC"]],
    });

    let predictions = predictionData.map((prediction) =>
      prediction.get({ plain: true })
    );

    const predLength = predictions.length;

    if (predLength > 10) {
      predictions = predictions.slice(0, 10);
    }

    if (predictionData.length === 0) {
      res.render("portfolio", { title: "Portfolio Page", hasPortfolio: false });
      return;
    }
    res.render("portfolio", {
      title: "Portfolio Page",
      hasPortfolio: true,
      predictions,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
