"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objection = require("objection");

class Orders extends _objection.Model {
  static get tableName() {
    return "pedidos";
  }

}

var _default = Orders;
exports.default = _default;