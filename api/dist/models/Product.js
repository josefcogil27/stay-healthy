"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objection = require("objection");

class Products extends _objection.Model {
  static get tableName() {
    return "productos";
  }

}

var _default = Products;
exports.default = _default;