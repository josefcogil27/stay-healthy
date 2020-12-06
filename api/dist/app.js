"use strict";

var _express = _interopRequireDefault(require("express"));

var _knex = _interopRequireDefault(require("knex"));

var _objection = require("objection");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var serverConfig = _interopRequireWildcard(require("./knexfile"));

var _users = _interopRequireDefault(require("./routes/users"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Importar modulos
// Importar rutas
// Inicializar objection
var knex;
var server = 'development';

if (server == serverConfig.Server) {
  knex = (0, _knex.default)(serverConfig.production);
} else {
  knex = (0, _knex.default)(serverConfig.development);
}

_objection.Model.knex(knex); // Configurar app


var app = (0, _express.default)().use((0, _morgan.default)('dev')).use((0, _cors.default)()); // Rutas (./routes)

var rutas = [{
  ruta: 'users',
  nombre: _users.default
}]; // Definir rutas

var definirRutas = rutas => {
  rutas.forEach(ruta => {
    app.use("/".concat(ruta.ruta), ruta.nombre);
  });
};

definirRutas(rutas); // Iniciar servidor

app.listen(serverConfig.PORT, () => console.log("Listening on port ".concat(serverConfig.PORT)));