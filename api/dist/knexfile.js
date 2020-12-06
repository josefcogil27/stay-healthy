"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var port = process.env.PORT || 3000;
var _default = {
  Sever: 'production',
  PORT: port,
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "root",
      database: "stay_healthy"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },
  production: {
    client: "pg",
    connection: {
      host: "",
      user: "",
      password: "",
      database: ""
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
exports.default = _default;