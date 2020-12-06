"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.editUser = exports.addUser = exports.getUserById = exports.getUsers = void 0;

var getUsers = (req, res) => {
  res.status(200).json({
    message: 'Get Users'
  });
};

exports.getUsers = getUsers;

var getUserById = (req, res) => {
  res.status(200).json({
    message: 'Get by id'
  });
};

exports.getUserById = getUserById;

var addUser = (req, res) => {
  res.status(200).json({
    message: 'Add user'
  });
};

exports.addUser = addUser;

var editUser = (req, res) => {
  res.status(200).json({
    message: 'Edit User'
  });
};

exports.editUser = editUser;

var deleteUser = (req, res) => {
  res.status(200).json({
    message: 'Delete user'
  });
};

exports.deleteUser = deleteUser;