"use strict";

exports.up = knex => {
  return knex.schema.createTable('productos', table => {
    table.increments('id').primary();
    table.string('codigo');
    table.string('nombre');
    table.string('descripcion');
    table.string('imagen');
    table.integer('cantidad');
    table.float('precio_bs');
    table.float('precio_dolares');
    table.integer('id_categoria').unsigned().references('id').inTable('categorias');
    table.integer('id_empresa').unsigned().references('id').inTable('empresas');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('productos');
};