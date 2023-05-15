const Joi = require('joi');
const jwt = require('jsonwebtoken');
const db = require('../models');
const { HTTP_UNAUTHORIZED } = require('http-status-codes');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

//the auth token controller 
// Login controller
exports.login = async (req, res) => {
  try {
    // Validate input data
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(HTTP_BAD_REQUEST).json({ error: error.details[0].message });
    }
    const { email, password } = value;

    // Find user by email
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(HTTP_UNAUTHORIZED).json({ error: 'Invalid email or password' });
    }

    // Verify password
    const isValidPassword = await user.verifyPassword(password);
    if (!isValidPassword) {
      return res.status(HTTP_UNAUTHORIZED).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Send token as response
    res.status(HTTP_OK).json({ token });
  } catch (err) {
    console.error(err);
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: 'Failed to log in' });
  }
};
