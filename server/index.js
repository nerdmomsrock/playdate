require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authCtrl = require("./Controller/authCtrl");

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

//const {} = require("./Controller/matchController");

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    console.log("Database Connected");
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () =>
      console.log(`Server running on Port ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

//auth endpoints

app.post("/api/register", authCtrl.register);
app.post("/api/login", authCtrl.login);
app.delete("/api/logout", authCtrl.logout);

//const matchCtrl = require("./Controller/matchCtrl");
//app.get("/api/getMatches", matchCtrl.getMatches);

const profileCtrl = require("./Controller/profileCtrl");
//app.put("/api/profile", profileCtrl.edit);
app.get("/api/profiles", profileCtrl.getAllProfiles);

// app.get("/api/login", userLogin);

// app.post("/api/create", createAccount);

// app.put("/api/profile", editProfile);

// app.put("/api/matches/:id", rejectMatch);

// app.delete("/api/account/:id", deleteAccount);

// app.get("/api/matches/:id", getMatches);
