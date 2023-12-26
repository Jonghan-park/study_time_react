const router = require("express").Router();
const passport = require("passport");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_SECRET;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "openid", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login",
  })
);
router.get("/login/success", async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["openid", "email", "profile"],
    },
    function (accessToken, refreshToken, profile, cb) {
      const user = {
        name: profile.displayName,
        pic: profile.photos[0].value,
        email: profile.emails[0].value,
        token: accessToken,
      };

      return cb(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = router;
