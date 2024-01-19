const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// Import Routes
const authRoute = require("./routes/auth");

// Middleware
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

// Generate a random secret key
const secretKey =
  crypto.getRandomValues(new Uint32Array(10)).join("") + Date.now();
app.use(session({ secret: secretKey, resave: true, saveUninitialized: true }));

// Use cors and sessions
app.use(
  cors({
    origin: "https://study-time-web-server.onrender.com",
    credentials: true,
  })
);
// Enable CORS for all routes
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://study-time-web-server.onrender.com"
  );
  res.header("Access-Control-Allow-Methods", "GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Passport config
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.get("/api", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
