"use strict";

exports.up = knex => {
  return knex.schema.createTable('empresa_info_bancaria', table => {
    table.increments('id').primary();
    table.integer('id_empresa');
    table.integer('id_info_bancaria').unsigned().references('id').inTable('info_bancaria');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('empresa_info_bancaria');
};