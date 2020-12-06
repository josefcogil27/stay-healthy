exports.up = knex => {
    return knex.schema.createTable('categorias', table => {
        table.increments('id').primary()
        table.string('nombre')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('categorias')
}