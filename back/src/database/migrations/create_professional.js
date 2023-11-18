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
        .then(() =>
            knex('professional').insert([
                { "id": 1, "description": "Arnold Flexington", "specialty": "Treinamento de Força e Resistência: Especializado em ganho de massa muscular, melhora da força e aumento da resistência.", "whatsapp": "(11)99999-9999", "idcity": 2, "image": null, "idcategory": 7, "hidden": false },
                { "id": 2, "description": "Tony McMuscles", "specialty": "Treinamento de Condicionamento Físico Geral: Especializado em melhora da resistência cardiovascular, flexibilidade e equilíbrio.", "whatsapp": "(81)99999-9999", "idcity": 3, "image": null, "idcategory": 7, "hidden": false },
                { "id": 3, "description": "Paula Plank", "specialty": "Treinamento de Perda de Peso: Especializada em perda de peso combinando exercícios e orientação nutricional.", "whatsapp": "(48)99999-9999", "idcity": 1, "image": null, "idcategory": 7, "hidden": false },
                { "id": 4, "description": "Tonia Weights", "specialty": "Treinamento Funcional: Especializada em exercícios que melhoram a capacidade funcional do corpo.", "whatsapp": "(51)99999-9999", "idcity": 4, "image": null, "idcategory": 7, "hidden": false },
                { "id": 5, "description": "Força e Folia Fitness", "specialty": "Treinamento Funcional: Especializada em programas de treinamento funcional que incorporam elementos lúdicos.", "whatsapp": "(73)99999-9999", "idcity": 5, "image": null, "idcategory": 8, "hidden": false },
                { "id": 6, "description": "GinasticMania", "specialty": "Ginástica Artística e Rítmica: Essa academia oferece aulas de ginástica artística e rítmica para crianças e adultos.", "whatsapp": "(62)99999-9999", "idcity": 6, "image": null, "idcategory": 8, "hidden": false },
                { "id": 7, "description": "Dra. Andréia Pereira", "specialty": "Avalia a saúde cardiovascular e fornece orientação sobre exercícios e hábitos alimentares saudáveis.", "whatsapp": "(11) 99999-9999", "idcity": 2, "image": null, "idcategory": 1, "hidden": false }
            ])
        )

};

exports.down = function (knex) {
    return knex.schema.dropTable('professional')
};
