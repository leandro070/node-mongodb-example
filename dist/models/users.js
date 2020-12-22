"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name required']
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password required']
  },
  photo: {
    type: String,
    required: false
  },
  role: {
    type: String,
    "default": 'USER_ROLE'
  },
  state: {
    type: Boolean,
    "default": true
  },
  google: {
    type: Boolean,
    "default": false
  }
});

var _default = (0, _mongoose.model)('users', userSchema);

exports["default"] = _default;