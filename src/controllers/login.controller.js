const generateToken = require('../auth/token');
const { userService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.getUserLogin(email, password);
    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const token = generateToken(user.email);

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

module.exports = {
  login,
};