exports.up = knex => {
    return knex.schema.createTable('clientes', table => {
        table.increments('id').primary()
        table.string('nombre')
        table.string('cedula')
        table.string('telefono')
        table.string('correo')
        table.string('direccion')
        table.integer('id_usuario').unsigned().references('id').inTable('usuarios').onDelete('CASCADE')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('clientes')
}