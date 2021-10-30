// If you don't have it already I would recomend getting Thunder Client to test your endpoints.  Its just like postman but is an extention for VS code.  You don't have to open a new app to test things.

require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
// Nathan - const authCtrl = require('./Controller/authCtrl'); it easier if you just destructure this object
const { register, login, logout } = require('./Controller/authCtrl');

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
    console.log('Database Connected');
    app.set('db', dbInstance);

    // Why is your app.listen in your massive setion?
    // app.listen(SERVER_PORT, () =>
    //   console.log(`Server running on Port ${SERVER_PORT}`)
    // );
  })
  .catch((err) => console.log(err, 'DB error'));

//auth endpoints

// app.post('/api/register', authCtrl.register);
// app.post('/api/login', authCtrl.login);
// app.delete('/api/logout', authCtrl.logout);
// Nathan - because you destructured authCtrl above you can simplify these lines

// Nathan - your register and login endpoints are working (testing with thunder client)

app.post('/api/register', register);
app.post('/api/login', login);
app.delete('/api/logout', logout);

//const matchCtrl = require("./Controller/matchCtrl");
//app.get("/api/getMatches", matchCtrl.getMatches);

const profileCtrl = require('./Controller/profileCtrl');
//app.put("/api/profile", profileCtrl.edit);
app.get('/api/profiles', profileCtrl.getAllProfiles);

// app.get("/api/login", userLogin);

// app.post("/api/create", createAccount);

// app.put("/api/profile", editProfile);

// app.put("/api/matches/:id", rejectMatch);

// app.delete("/api/account/:id", deleteAccount);

// app.get("/api/matches/:id", getMatches);

// I normally put this part here. app.listen()
app.listen(SERVER_PORT, () =>
  console.log(`Server running on Port ${SERVER_PORT}`)
);
