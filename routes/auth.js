const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.get("/signout", signout);
router.post(
  "/signin",
  [
    check("email")
      .isEmail()
      .withMessage("email is required"),
    check("password")
      .isLength({
        min: 1
      })
      .withMessage("password field is required")
  ],
  signin
);
router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name should be at least 3 character"),
    check("email")
      .isEmail()
      .withMessage("email is required"),
    check("password")
      .isLength({
        min: 3
      })
      .withMessage("password should be at least 3 character")
  ],
  signup
);

router.get("/testroute", isSignedIn, (req, res) => {
  res.send("A Protected route");
});
module.exports = router;
