// const db = require('../db/dbpool');
// const { hash } = require('bcryptjs');
// const { sign } = require('jsonwebtoken');
// const { SECRET } = require('../db/dbConfig');

// exports.getUsers = async (req, res) => {
//   try {
//     const { rows } = await db.query('SELECT user_id, email FROM users');

//     return res.status(200).json({
//       success: true,
//       users: rows,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       error: 'Failed to retrieve users.',
//     });
//   }
// };

// exports.register = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const hashedPassword = await hash(password, 10);

//     await db.query('INSERT INTO users(email, password) VALUES ($1, $2)', [
//       email,
//       hashedPassword,
//     ]);

//     return res.status(201).json({
//       success: true,
//       message: 'Registration successful.',
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       error: 'Failed to register user.',
//     });
//   }
// };

// exports.login = async (req, res) => {
//   let user = req.user;

//   let payload = {
//     id: user.user_id,
//     email: user.email,
//   };

//   try {
//     const token = await sign(payload, SECRET);

//     return res
//       .status(200)
//       .cookie('token', token, { httpOnly: true })
//       .json({
//         success: true,
//         message: 'Logged in successfully.',
//       });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       error: 'Failed to log in.',
//     });
//   }
// };

// exports.protected = async (req, res) => {
//   try {
//     return res.status(200).json({
//       info: 'Protected info.',
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       error: 'Failed to retrieve protected info.',
//     });
//   }
// };

// exports.logout = async (req, res) => {
//   try {
//     return res
//       .status(200)
//       .clearCookie('token', { httpOnly: true })
//       .json({
//         success: true,
//         message: 'Logged out successfully.',
//       });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       error: 'Failed to log out.',
//     });
//   }
// };
