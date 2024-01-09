const jwt = require('jsonwebtoken');

function generateAuthToken(userId) {
  
  const token = jwt.sign({ userId }, 'secreto_del_servidor', { expiresIn: '1h' });
  return token;
}

module.exports = { generateAuthToken };