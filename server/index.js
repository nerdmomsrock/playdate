const express = require("express");
const {} = require("./authController");
const {} = require("./matchController");
const {} = require("./profileController");

const app = express();

const PORT = 5050;

app.use(express.json());

app.get("/api/matches/:id", getMatches);

app.get("/api/login", userLogin);

app.post("/api/create", createAccount);

app.put("/api/profile", editProfile);

app.put("/api/matches/:id", rejectMatch);

app.delete("/api/account/:id", deleteAccount);

app.listen(PORT, () => console.log(`Kicking butt on Port ${PORT}!`));
