exports.up = knex => {
    return knex.schema.createTable('info_bancaria', table => {
        table.increments('id').primary()
        table.string('nro_cuenta')
        table.string('banco')
        table.string('tipo_cuenta')
        table.string('cedula')
        table.string('titular')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('info_bancaria')
}