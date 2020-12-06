exports.up = knex => {
    return knex.schema.createTable('producto_pedido', table => {
        table.increments('id').primary()
        table.integer('id_producto').unsigned().references('id').inTable('productos')
        table.integer('id_pedido').unsigned().references('id').inTable('pedidos').onDelete('CASCADE');
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('producto_pedido')
}
