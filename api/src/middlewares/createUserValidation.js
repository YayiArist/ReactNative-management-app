const { ClientError } = require('../utils/errors');

module.exports = (req, res, next) => {
  const { name, email, password, phone, gender, howDidYouHear, city, state } =
    req.body;

  if (name && email && password && phone && gender && howDidYouHear && city && state) {
    req.userData = {
      name,
      email,
      password,
      phone,
      gender,
      howDidYouHear,
      city,
      state,
    };

    return next();
  } else {
    throw new ClientError(
      'name, email, password, phone, gender, howDidYouHear, city, and state are required',
      400
    );
  }
};