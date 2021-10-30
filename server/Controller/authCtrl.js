const bcrypt = require('bcryptjs');
//I'm going to reorganize your file.  I think it might look better and easier to read this way.  The .catch at the end of your db functions should help you catch errors.  This only works with JS if you learn typescript this pattern does not work.

const register = async (req, res) => {
  const db = req.app.get('db');

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

  const existingUser = await db
    .check_user({ email })
    .catch((err) =>
      console.log(
        err,
        'This error is from the check user DB function authCtrl:18'
      )
    );

  if (existingUser[0]) {
    return res.status(400).send('User already exists with that email');
  }

  let salt = bcrypt.genSaltSync(5);
  const hash = await bcrypt.hashSync(password, salt);

  // // if the key name is the same as the name of the var you don't have to do email: email.  You can just have it be email
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
    .catch((err) => console.log(err, 'registering error'));

  // console.log(newUser, 'this is the new user login');

  // // await db.profile_builder({
  // //   user_id,
  // //   first_name,
  // //   number_of_kids,
  // //   favorite_food,
  // //   embarrassing_moment,
  // //   gender,
  // //   photo,
  // // });

  req.session.user = newUser[0];
  // Nathan - you had returns in your other two functions
  return res.status(201).send(req.session.user);
};

// } catch (e) {
//   res.status(500).json(e);
// }

const login = async (req, res) => {
  const db = req.app.get('db');
  const { email, password } = req.body;

  const existingUser = await db.check_user({ email });
  if (!existingUser[0]) {
    return res.status(404).send('User not found');
  }

  console.log(existingUser, 'this is the existing User');

  const isAuthenticated = bcrypt.compareSync(
    password,
    existingUser[0].password
  );
  if (!isAuthenticated) {
    return res.status(401).send('Password is incorrect');
  }

  // Nathan - What is this line for?

  delete existingUser[0].password;
  console.log(existingUser[0]);
  //place user on session and send back to client if authenticated
  req.session.user = existingUser[0];
  return res.status(202).send(req.session.user);
};

const logout = (req, res) => {
  req.session.destroy();

  return res.sendStatus(200);
};

module.exports = {
  register,
  login,
  logout,
};
