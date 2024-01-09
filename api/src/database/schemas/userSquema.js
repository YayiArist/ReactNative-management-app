const { Schema } = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4, 
  },
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]*$/, 
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
},
  phone: {
    type: String,
    required: true,
    match: /^[0-9]+$/,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Others'],
    required: true,
  },
  howDidYouHear: {
    type: [String], 
    enum: ['LinkedIn', 'Friends', 'Job Portal', 'Others'],
    required: true,
  },
  city: {
    type: String,
    enum: ['Mumbai', 'Pune', 'Ahmedabad'],
    required: true,
  },
  state: {
    type: String,
    enum: ['Gujarat', 'Maharashtra', 'Karnataka'],
    required: true,
  },
}, {
  timestamps: true, 
});

module.exports = userSchema;