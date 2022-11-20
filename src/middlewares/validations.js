const jwt = require('jsonwebtoken');
const { userService } = require('../services');
require('dotenv/config');

const emailValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  next();
};

const userValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (!email.match(/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

const tokenValidation = async (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserByEmail(decoded.data);

    if (!user) return res.status(401).json({ message: 'User not found' });

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { emailValidation, userValidation, tokenValidation };