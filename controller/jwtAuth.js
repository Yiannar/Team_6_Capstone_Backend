const express = require("express");
const auth = express.Router();
const bcrypt = require("bcrypt");
// const pool = require("../db");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

// 3. Bcrypt the user passwword for security 

// 4. enter the new user inside db 

// 5. generating  our jwt token 


auth.post("/register", validInfo, async (req, res) => {
  // 1. destructure the req.body (name, email, password)
  const { email, name, password } = req.body;

  try {
    // 2. check if user exist (if user exist then throw and error 
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

auth.post("/login", validInfo, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

auth.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = auth;