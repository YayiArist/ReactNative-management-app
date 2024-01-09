const { ClientError } = require('../utils/errors');

module.exports = (req, res, next) => {
    console.log('hit')
  
    const { email, password} = req.body;

    if (email && password) {
        req.userData = {
           email,
           password
        };

        return next();
    } else {
        throw new ClientError('email and password are required', 400);
    }
};

