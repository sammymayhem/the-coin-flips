const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../util/withAuth");
const moment = require("moment");
const fetch = require("node-fetch");
require("dotenv").config();

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

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
      const ticker = req.query.tickerText;
      const tMonthAgo = moment().subtract(1, "months").format("YYYY-MM-DD");
      const tCurrent = moment().format("YYYY-MM-DD");
      const pgUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${tMonthAgo}/${tCurrent}?adjusted=true&sort=asc&apiKey=${process.env.PG_KEY}`;

      const response = await fetch(pgUrl);
      const rawdata = await response.json();

      let x = [];
      let y = [];

      rawdata.results.forEach((obj) => {
        y.push(obj.c);
        x.push(obj.t);
      });

      const last = x[x.length - 1];
      const xLength = x.length;
      for (let i = 1; i < xLength; i++) {
        x.push(last + i * 86400);
      }

      const data = {
        ticker,
        x,
        y,
      };

      console.log(data);

      res.render("predictions", { title: "Prediction", data });
    } else {
      res.render("predictions", { title: "Prediction" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
