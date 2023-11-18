exports.up = function (knex) {
    return knex.schema
        .createTable('city', (t) => {
            t.increments('id').notNullable().primary();
            t.string('description')
            t.string('state', 2)
            t.boolean('hidden').defaultTo(false)
        })
        .then(() =>
            knex('city').insert([
                { "id": 1, "description": "Criciúma", "state": "SC", "hidden": false },
                { "id": 2, "description": "São Paulo", "state": "SP", "hidden": false },
                { "id": 3, "description": "Recife", "state": "PE", "hidden": false },
                { "id": 4, "description": "Porto Alegre", "state": "RS", "hidden": false },
                { "id": 5, "description": "Porto Seguro", "state": "BA", "hidden": false },
                { "id": 6, "description": "Goiânia", "state": "GO", "hidden": false }
            ])
        )
};

exports.down = function (knex) {
    return knex.schema.dropTable('city')
};
