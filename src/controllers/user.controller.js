const { userService } = require('../services');
const generateToken = require('../auth/token');

const newUser = async (req, res) => {
  const { body } = req;

  try {
    const user = await userService.addNewUser(body);
    const token = generateToken(body.email);

    if (user.message) {
      return res.status(409).json({ message: user.message });
    }
    return res.status(201).json({ token });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

const getAllUsers = async (_req, res) => {
    try {
      const users = await userService.findAllUsers();
  
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  const getUserById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await userService.getUserById(id);
  
      if (!user) return res.status(404).json({ message: 'User does not exist' });
  
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

module.exports = {
  newUser,
  getAllUsers,
  getUserById,
};