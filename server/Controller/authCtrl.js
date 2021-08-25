const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
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
    const existingUser = await db.check_user({ email });
    if (existingUser[0]) {
      return res.status(400).send("User already exists with that email");
    }

    let salt = bcrypt.genSaltSync(5);
    const hash = await bcrypt.hashSync(password, salt);

    const newUser = await db.register_user({
      email: email,
      hash: hash,
      first_name: first_name,
      your_kids: your_kids,
      their_kids: their_kids,
      favorite_food: favorite_food,
      embarrassing_moment: embarrassing_moment,
      gender: gender,
      photo: photo,
    });

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

  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;

    const existingUser = await db.check_user({ email });
    if (!existingUser[0]) {
      return res.status(404).send("User not found");
    }

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

  logout: (req, res) => {
    req.session.destroy();

    return res.sendStatus(200);
  },
};
