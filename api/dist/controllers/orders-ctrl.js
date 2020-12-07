"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteOrder = exports.editOrder = exports.addOrder = exports.getOrderById = exports.getOrders = void 0;

var _Order = _interopRequireDefault(require("../models/Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var orderData = ['pedidos.id as cod_pedido', 'pedidos.fecha', 'pedidos.total', 'productos.nombre as producto', 'productos.precio_bs', 'empresas.nombre as empresa', 'ivas.iva', 'ivas.porcentaje'];

var getOrders = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield _Order.default.query().select(orderData).innerJoin('producto_pedido', 'producto_pedido.id_pedido', '=', 'pedidos.id').innerJoin('productos', 'productos.id', '=', 'producto_pedido.id_producto').innerJoin('empresas', 'empresas.id', '=', 'productos.id_empresa').innerJoin('ivas', 'ivas.id', '=', 'empresas.id_iva').where('productos.id_empresa', '=', 1).then(response => {
      var products = [];
      var product = {};
      response.forEach(order => {
        product = {
          nombre: order.producto,
          precio: order.precio_bs,
          empresa: order.empresa,
          iva: order.iva,
          porcentaje: order.porcentaje
        };
        products.push(product);
      });
      var orderBody = {
        id: response[0].cod_pedido,
        fecha: response[0].fecha,
        total: response[0].total,
        products
      };
      res.status(200).json({
        message: 'Success',
        orderBody
      });
    }).catch(err => {
      console.log(err);
      res.status(400).json({
        message: 'Error',
        err
      });
    });
  });

  return function getOrders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getOrders = getOrders;

var getOrderById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    res.status(200).json({
      message: 'Get by id'
    });
  });

  return function getOrderById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getOrderById = getOrderById;

var addOrder = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    res.status(200).json({
      message: 'Add Order'
    });
  });

  return function addOrder(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addOrder = addOrder;

var editOrder = (req, res) => {
  res.status(200).json({
    message: 'Edit Order'
  });
};

exports.editOrder = editOrder;

var deleteOrder = (req, res) => {
  res.status(200).json({
    message: 'Delete Order'
  });
};

exports.deleteOrder = deleteOrder;