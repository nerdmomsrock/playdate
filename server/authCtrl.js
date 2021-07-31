const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    const existingUser = await db.check_user({ email });
    if (existingUser[0]) {
      return res.status(400).send("User already exists with that email");
    }

    let salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = db.register_user({ email, hash });

    req.session.user = newUser[0];
    res.status(201).send(req.session.user);
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;

    const existingUser = await db.check_user({ email });
    if (!existingUser[0]) {
      return res.status(404).send("User not found");
    }

    const isAuthenticated = bcrypt.compareSync(password, existingUser.password);
    if (!isAuthenticated) {
      return res.status(401).send("Password is incorrect");
    }

    req.session.user = existingUser[0];
    return res.status(202).send(req.session.user);
  },

  logout: (req, res) => {
    req.session.destroy();

    return res.sendStatus(200);
  },
};
