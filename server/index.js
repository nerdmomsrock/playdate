require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

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

app.get("/api/matches/:id", getMatches);

app.get("/api/login", userLogin);

app.post("/api/create", createAccount);

app.put("/api/profile", editProfile);

app.put("/api/matches/:id", rejectMatch);

app.delete("/api/account/:id", deleteAccount);
