const router = require("express").Router();
require("dotenv").config();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_SECRET;

router.get("/login/success", async (req, res) => {
  if (req.user) {
    const token = jwt.sign(
      { user: req.user, accessToken: req.user.accessToken },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ success: true, token: token });
  }
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "profile",
      "openid",
      "email",
      "https://www.googleapis.com/auth/calendar",
    ],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://study-time-web-server.onrender.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      profile.accessToken = accessToken;
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = router;
