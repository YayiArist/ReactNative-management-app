const { ClientError } = require('../../utils/errors');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
 
  const { recordName, recordPhone, recordEmail, recordImage } = req.body;
  const { userId } = decodedToken;// este viene del front 

  if (userId && recordName && recordPhone && recordEmail && recordImage) {
    req.recordData = {
      userId,
      recordName,
      recordPhone,
      recordEmail,
      recordImage,
    };

    return next();
  } else {
    throw new ClientError(
      'userId, recordName, recordPhone, recordEmail, and recordImage are required',
      400
    );
  }
};