"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProduct = exports.editProduct = exports.addProduct = exports.getProductById = exports.getProducts = void 0;

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var data = ['productos.codigo', 'productos.nombre', 'productos.precio_bs', 'productos.descripcion', 'productos.cantidad', 'productos.imagen', 'categorias.nombre as categoria', 'empresas.nombre as empresa', 'ivas.iva', 'ivas.porcentaje'];

var getProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield _Product.default.query().select(data).where('productos.id_empresa', '=', 1).innerJoin('categorias', 'categorias.id', '=', 'productos.id_categoria').innerJoin('empresas', 'empresas.id', '=', 'productos.id_empresa').innerJoin('ivas', 'ivas.id', '=', 'empresas.id_iva').then(response => {
      res.status(200).json({
        message: 'Success',
        products: response
      });
    }).catch(err => {
      console.log(err);
      res.status(400).json({
        message: 'Error',
        err
      });
    });
  });

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    yield _Product.default.query().select(data).where('productos.id_empresa', '=', 1).where('productos.id', '=', req.params.productId).innerJoin('categorias', 'categorias.id', '=', 'productos.id_categoria').innerJoin('empresas', 'empresas.id', '=', 'productos.id_empresa').innerJoin('ivas', 'ivas.id', '=', 'empresas.id_iva').then(response => {
      if (response.length == 0) {
        res.status(404).json({
          message: 'Not found'
        });
        return;
      }

      res.status(200).json({
        message: 'Success',
        products: response
      });
    }).catch(err => {
      console.log(err);
      res.status(400).json({
        message: 'Error',
        err
      });
    });
  });

  return function getProductById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var addProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    res.status(200).json({
      message: 'Add product'
    });
  });

  return function addProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addProduct = addProduct;

var editProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    res.status(200).json({
      message: 'Edit product'
    });
  });

  return function editProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editProduct = editProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    res.status(200).json({
      message: 'Delete product'
    });
  });

  return function deleteProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;