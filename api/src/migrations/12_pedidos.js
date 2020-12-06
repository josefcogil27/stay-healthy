exports.up = knex => {
    return knex.schema.createTable('pedidos', table => {
        table.increments('id').primary()
        table.integer('id_tipo_pago').unsigned().references('id').inTable('tipo_pago')
        table.integer('id_cliente').unsigned().references('id').inTable('clientes')
        table.string('referencia')
        table.float('total')
        table.date('fecha')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('pedidos')
}