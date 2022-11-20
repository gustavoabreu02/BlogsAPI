const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const secret = process.env.JWT_SECRET;

  return jwt.sign({ data: payload }, secret, jwtConfig);
};

module.exports = generateToken;
