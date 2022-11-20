const { User } = require('../models');

const getUser = async (email, password) => {
  const user = User.findOne({
    where: { email, password },
  });

  return user;
};

const addNewUser = async (user) => {
  const { displayName, email, password, image } = user;

  const findEmail = await User.findOne({ where: { email } });
  if (findEmail) return { message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  getUser,
  addNewUser,
};
