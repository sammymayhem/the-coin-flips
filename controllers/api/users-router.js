const { User } = require("../../models");
const router = require("express").Router();
const withAuth = require("../../util/withAuth");

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    req.session.isLoggedIn = true;
    req.session.userId = user.id;

    req.session.save(() => res.json({ id: user.id }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("User not found.");
    }
    const isValidPassword = await user.checkPassword(password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save(() => res.json({ id: user.id }));
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid username or password." });
  }
});

// router.get("/login", (req, res) => {
//   if (req.session.isLoggedIn) {
//     res.json(true);
//   } else {
//     res.json(false);
//   }
// });

router.get("/logout", withAuth, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.render("home", {
      title: "Home Page",
      isLoggedIn: false,
    });
  });
});

module.exports = router;
