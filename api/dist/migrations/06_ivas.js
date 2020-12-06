"use strict";

exports.up = knex => {
  return knex.schema.createTable('ivas', table => {
    table.increments('id').primary();
    table.float('iva');
    table.string('porcentaje');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('ivas');
};