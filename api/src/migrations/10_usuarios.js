exports.up = knex => {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('usuario')
        table.string('clave')
        table.integer('id_rol').unsigned().references('id').inTable('roles')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('usuarios')
}