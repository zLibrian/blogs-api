const loginService = require('../service/loginService');

const loginController = async (req, res, _next) => {
  const { email, password } = req.body;
  if (!email || !password) throw new Error('REQUIRED_FIELDS');
  const userEnconded = await loginService(email);
  return res.status(200).json({ token: userEnconded });
};

module.exports = loginController;