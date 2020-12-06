exports.up = knex => {
    return knex.schema.createTable('empresa_pago_movil', table => {
        table.increments('id').primary()
        table.integer('id_empresa')
        table.integer('id_pago_movil').unsigned().references('id').inTable('pago_movil')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('empresa_pago_movil')
}