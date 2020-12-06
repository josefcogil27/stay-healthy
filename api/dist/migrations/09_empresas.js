"use strict";

exports.up = knex => {
  return knex.schema.createTable('empresas', table => {
    table.increments('id').primary();
    table.string('nombre');
    table.float('dolar');
    table.string('direccion');
    table.string('rif');
    table.integer('id_iva').unsigned().references('id').inTable('ivas');
    table.integer('id_empresa_info_bancaria').unsigned().references('id').inTable('empresa_info_bancaria');
    table.integer('id_empresa_pago_movil').unsigned().references('id').inTable('empresa_pago_movil');
    table.string('latitud');
    table.string('longitud');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('empresas');
};