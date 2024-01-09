const { Schema } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const recordSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    userId: {
      type: Schema.Types.ObjectId, 
      ref: 'Users', 
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String, 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = recordSchema;