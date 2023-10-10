exports.up = function (knex) {
  return knex.schema
    .createTable('history', (t) => {
      t.increments('id').notNullable().primary();
      t.integer('iduser')
      t.date('day')
      t.integer('height')
      t.integer('weight')
      t.integer('bmi')
      t.index(['iduser'], 'idx_history_user')
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('history')
}