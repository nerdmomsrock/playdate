require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = "express-session";
authCtrl = require("./authCtrl");

const express = require("express");
const {} = require("./authController");
const {} = require("./matchController");
const {} = require("./profileController");

const app = express();

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    console.log("Database Connected");
    app.set("db", db);
    app.listen(SERVER_PORT, () =>
      console.log(`Server running on Port ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

app.post("/api/register", authCtrl.register);
app.post("/api/login", authCtrl.login);
app.get("/api/logout", authCtrl.logout);

app.get("/api/matches/:id", getMatches);

app.get("/api/login", userLogin);

app.post("/api/create", createAccount);

app.put("/api/profile", editProfile);

app.put("/api/matches/:id", rejectMatch);

app.delete("/api/account/:id", deleteAccount);
