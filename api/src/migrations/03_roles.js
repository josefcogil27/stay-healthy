exports.up = knex => {
    return knex.schema.createTable('roles', table => {
        table.increments('id').primary()
        table.string('rol')
    })
}

exports.down = knex => {
    return knex.schema.dropTableIfExists('roles')
}