require("dotenv").config();

const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = require("express-session");

const express = require("express");

//const {} = require("./Controller/matchController");

const app = express();
app.use(express.json());

//get all profiles endpoint
const profileCtrl = require("./Controller/profileCtrl");
app.get("/api/profiles", profileCtrl.getAllProfiles);

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

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

const authCtrl = require("./Controller/authCtrl");
app.post("/api/register", authCtrl.register);
app.post("/api/login", authCtrl.login);
app.get("/api/logout", authCtrl.logout);

// app.get("/api/login", userLogin);

// app.post("/api/create", createAccount);

// app.put("/api/profile", editProfile);

// app.put("/api/matches/:id", rejectMatch);

// app.delete("/api/account/:id", deleteAccount);

// app.get("/api/matches/:id", getMatches);
