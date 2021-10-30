const bcrypt = require("bcryptjs");
const { isCompositeComponent } = require("react-dom/test-utils");

//module.exports = {
  const register = async (req, res) => {
    const db = req.app.get("db");
    const {
      email,
      password,
      first_name,
      your_kids,
      their_kids,
      favorite_food,
      embarrassing_moment,
      gender,
      photo,
    } = req.body;
    console.log(req.body);

    const existingUser = await db
    .check_user({ email })
    .catch((err) =>
    console.log(
      err, 
      "error"
    )
    )

    if (existingUser[0]) {
      return res.status(400).send("User already exists with that email");
    }

    let salt = bcrypt.genSaltSync(5);
    const hash = await bcrypt.hashSync(password, salt);

    const newUser = await db
    .register_user({
      email,
      hash,
      first_name,
      your_kids,
      their_kids,
      favorite_food,
      embarrassing_moment,
      gender,
      photo,
    })
    .catch((err) => console.log(err, "Registration error"));

    console.log(newUser, "new user login")

    // await db.profile_builder({
    //   user_id,
    //   first_name,
    //   number_of_kids,
    //   favorite_food,
    //   embarrassing_moment,
    //   gender,
    //   photo,
    // });

    req.session.user = newUser[0];

    res.status(201).send(req.session.user);
  },

  // } catch (e) {
  //   res.status(500).json(e);
  // }

  const login = async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;

    const existingUser = await db.check_user({ email });
    if (!existingUser[0]) {
      return res.status(404).send("User not found");
    }

    console.log(existingUser, "I am the existing user")

    const isAuthenticated = bcrypt.compareSync(
      password,
      existingUser[0].password
    );
    if (!isAuthenticated) {
      return res.status(401).send("Password is incorrect");
    }



    delete existingUser[0].password;
    console.log(existingUser[0]);
    //place user on session and send back to client if authenticated
    req.session.user = existingUser[0];
    return res.status(202).send(req.session.user);
  },

  const logout = (req, res) => {
    req.session.destroy();

    return res.sendStatus(200);
  };
//};
module.exports = {
  register,
  login,
  logout,
};
