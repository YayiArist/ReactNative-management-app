const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { User } = require("../../database/index");
const { response } = require("../../utils");
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../../helpers/authHelper");

module.exports = async (req, res) => {
  const { email, password } = req.userData;

  let user = await User.findOne({ email });
  !user && response(res, 404, { message: "User not Found" });

  const validPassword = await bcrypt.compare(password, user.password);
  !validPassword && response(res, 400, { message: "Wrong password" });

  const userId = user._id;
    const token = generateAuthToken(userId);



  response(res, 200, user, token);
};
