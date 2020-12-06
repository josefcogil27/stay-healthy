exports.up = knex => {
    return knex.schema.createTable('pago_movil', table => {
        table.increments('id').primary()
        table.string('nro_telefono')
        table.string('cedula')
        table.string('banco')
        table.string('cod_banco')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('pago_movil')
}