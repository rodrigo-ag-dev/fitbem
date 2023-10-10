exports.up = function (knex) {
    return knex.schema
        .createTable('professional', (t) => {
            t.increments('id').notNullable().primary();
            t.string('description')
            t.string('specialty', 600)
            t.string('whatsapp')
            t.string('idcity')
            t.binary('image')
            t.integer('idcategory')
            t.boolean('hidden').defaultTo(false)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable('professional')
};
