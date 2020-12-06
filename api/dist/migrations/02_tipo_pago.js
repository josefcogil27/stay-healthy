"use strict";

exports.up = knex => {
  return knex.schema.createTable('tipo_pago', table => {
    table.increments('id').primary();
    table.string('tipo');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('tipo_pago');
};