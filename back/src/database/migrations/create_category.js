exports.up = function (knex) {
    return knex.schema
        .createTable('category', (t) => {
            t.increments('id').notNullable().primary();
            t.string('description')
            t.integer('type')
            t.boolean('hidden').defaultTo(false)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('category')
};
