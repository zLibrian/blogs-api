const SECRET = process.env.JWT_SECRET;
const JWT = require('jsonwebtoken');

const token = {
  encoder: async (payload) => {
    const encoded = JWT.sign({ payload }, SECRET);
    return encoded;
  },
  decoder: async (encoded) => {
    const decoded = JWT.decode(encoded, SECRET);
    return decoded;
  },
};

module.exports = token;