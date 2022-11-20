const { User } = require('../models');

const getUserLogin = async (email, password) => {
  const user = User.findOne({
    where: { email, password },
  });

  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const addNewUser = async (user) => {
  const { displayName, email, password, image } = user;

  const findEmail = await getUserByEmail(email);
  if (findEmail) return { message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const findAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  return user;
};

module.exports = {
  getUserLogin,
  addNewUser,
  getUserByEmail,
  findAllUsers,
  getUserById,
};
