const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  console.log("register hit :", req.body);
  const { email, username, password } = req.body;
  const db = req.app.get("db");

  // Standardize email casing
  email.toLowerCase();

  // Hash the password
  const hashedPassword = await argon2.hash(password, 10);

  // Add the new user
  try {
    const user = await db.users.insert({
      username: username,
      email: email,
      pwd: hashedPassword
    });

    // Create the JWT
    const token = jwt.sign({ username: user.username }, process.env.APP_SECRET);

    // Set JWT as a cookie on the response object
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    });

    // Sanitize user to send to client
    delete user.pwd;

    // Return the user to browser with 'Resource created' status code
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
    // STATUS CODE 409 = Conflict, can be resolved after changing inputs
    if (e.detail.includes("already exists")) {
      res.status(409).json({
        err: "Username already exists. Did you mean to log in, instead?"
      });
    } else {
      res
        .status(400)
        .json({ err: "An error occurred during registration. Try again." });
    }
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");

  try {
    // 1. Check if user exists in store
    const user = await db.users.findOne({ username: username });

    console.log(user);
    if (!user) {
      res.status(401).send({ err: `No user found for username ${username}` });
    }

    // 2. Check if pass is correct for user
    const valid = await argon2.verify(user.pwd, password);
    console.log(`pass is valid: ${valid}`);
    if (!valid) {
      res.status(401).send({ err: "Invalid password." });
    }

    // 3. Sanitize User
    delete user.pwd;

    // 3. Generate JWT
    const token = jwt.sign({ username: user.user_id }, process.env.APP_SECRET);

    // 4. Set cookie w/ token
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 60
    });

    // 5. Return user
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err: "Login Failed. Try again." });
  }
  //------------
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "The dogs are whining. Come back soon!" });
};

const getProfile = async (req, res) => {
  const db = req.app.get("db");
  console.log(req.username);
  const { id } = req.params;

  var profile;
  if (!id) {
    profile = await db.users.findOne({ username: "d0r01gg" });
  } else {
    profile = await db.users.findOne({ id: id });
  }
  delete profile.pwd;
  res.status(200).json(profile);
};
module.exports = { register, login, logout, getProfile };
