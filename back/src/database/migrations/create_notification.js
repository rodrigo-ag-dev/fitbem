exports.up = function (knex) {
  return knex.schema
    .createTable('notification', (t) => {
      t.increments('id').notNullable().primary();
      t.integer('iduserto')
      t.integer('iduserfrom')
      t.integer('type')
      t.integer('status')
      t.string('message')
      t.date('day')
      t.index(['iduserto'], 'idx_notification_userto')
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('notification')
}