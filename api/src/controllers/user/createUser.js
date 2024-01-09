const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { User } = require("../../database/index");
const { response } = require("../../utils");
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../../helpers/authHelper");

module.exports = async (req, res) => {
  const { name, email, password, phone, gender, howDidYouHear, city, state } =
    req.userData;

  let user = await User.findOne({ email });
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  if (!user) {
    const newUser = new User({
      _id: uuidv4(),
      name,
      email,
      password: hashedPassword,
      phone,
      gender,
      howDidYouHear,
      city,
      state,
    });

    user = await newUser.save();

    const userId = user._id;
   /*  const token = generateAuthToken(userId);
    localStorage.setItem("authToken", token); */

    response(res, 200, user,/*  token */);
  } else {
    response(res, 400, { message: "This email is already being used" });
  }
};
