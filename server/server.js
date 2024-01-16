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

// Use cors and sessions
app.use(
  cors({
    origin: "https://study-time-zwj9.onrender.com",
    credentials: true,
  })
);
app.use(session({ secret: secretKey, resave: true, saveUninitialized: true }));

// Enable CORS for all routes
// app.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://study-time-zwj9.onrender.com"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

// Passport config
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.get("/api", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
