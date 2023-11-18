exports.up = function (knex) {
    return knex.schema
        .createTable('category', (t) => {
            t.increments('id').notNullable().primary();
            t.string('description')
            t.integer('type')
            t.boolean('hidden').defaultTo(false)
        })
        .then(() =>
            knex('category').insert([
                { "id": 1, "description": 'Cardiologista', "hidden": false, "type": 0 },
                { "id": 2, "description": 'Dermatologista', "hidden": false, "type": 0 },
                { "id": 3, "description": 'Endocrinologista', "hidden": false, "type": 0 },
                { "id": 4, "description": 'Fisioterapeuta', "hidden": false, "type": 0 },
                { "id": 5, "description": 'Gastroenterologista', "hidden": false, "type": 0 },
                { "id": 6, "description": 'Nutricionista', "hidden": false, "type": 0 },
                { "id": 7, "description": 'Personal Trainer', "hidden": false, "type": 0 },
                { "id": 8, "description": 'Academia', "hidden": false, "type": 0 }
            ]
            )
        )
};

exports.down = function (knex) {
    return knex.schema.dropTable('category')
};
