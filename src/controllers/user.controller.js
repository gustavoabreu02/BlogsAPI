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

module.exports = {
  newUser,
};