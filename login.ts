import express from "express";
import bodyParser from "body-parser";
import path from "path";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as AppleStrategy } from "passport-apple";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Configure Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: "GOOGLE_CLIENT_ID",
      clientSecret: "GOOGLE_CLIENT_SECRET",
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle Google authentication
      return done(null, profile);
    }
  )
);

// Configure Apple Strategy
passport.use(
  new AppleStrategy(
    {
      clientID: "APPLE_CLIENT_ID",
      teamID: "APPLE_TEAM_ID",
      keyID: "APPLE_KEY_ID",
      privateKeyString: "APPLE_PRIVATE_KEY",
      callbackURL: "/auth/apple/callback"
    },
    (accessToken, refreshToken, idToken, profile, done) => {
      // Handle Apple authentication
      return done(null, profile);
    }
  )
);

// Configure Microsoft Strategy
passport.use(
  new MicrosoftStrategy(
    {
      clientID: "MICROSOFT_CLIENT_ID",
      clientSecret: "MICROSOFT_CLIENT_SECRET",
      callbackURL: "/auth/microsoft/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle Microsoft authentication
      return done(null, profile);
    }
  )
);

// Routes for authentication
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.sendFile(path.join(__dirname, "search.html"));
  }
);

app.get("/auth/apple", passport.authenticate("apple"));
app.get(
  "/auth/apple/callback",
  passport.authenticate("apple", { failureRedirect: "/" }),
  (req, res) => {
    res.sendFile(path.join(__dirname, "search.html"));
  }
);

app.get(
  "/auth/microsoft",
  passport.authenticate("microsoft", { scope: ["user.read"] })
);
app.get(
  "/auth/microsoft/callback",
  passport.authenticate("microsoft", { failureRedirect: "/" }),
  (req, res) => {
    res.sendFile(path.join(__dirname, "search.html"));
  }
);

// Local login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Add authentication logic here
  if (email === "user@example.com" && password === "password") {
    res.sendFile(path.join(__dirname, "search.html"));
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
