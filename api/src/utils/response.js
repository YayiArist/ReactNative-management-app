module.exports = (res, statusCode, data, token = null) => {
  const responseObj = {
    error: false,
    data,
  };

  if (token) {
    responseObj.token = token;
  }

  res.status(statusCode).json(responseObj);
};
