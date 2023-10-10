exports.up = function (knex) {
    return knex.schema
        .createTable('city', (t) => {
            t.increments('id').notNullable().primary();
            t.string('description')
            t.string('state', 2)
            t.boolean('hidden').defaultTo(false)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('city')
};
