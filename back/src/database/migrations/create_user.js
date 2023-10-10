exports.up = function (knex) {
    return knex.schema.createTable('user', (t) => {
        t.increments('id').notNullable().primary();
        t.string('name', 55)
        t.string('lastName', 200)
        t.string('phone', 50)
        t.string('gender', 1)
        t.string('email', 255)
        t.decimal('weight', 15, 2)
        t.decimal('height', 15, 2)
        t.string('password', 100)
        t.binary('image')
        t.boolean('hidden').defaultTo(false)
        t.index(['email'], 'usuario_email_idx')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user')
};
