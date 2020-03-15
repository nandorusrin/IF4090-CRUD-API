
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('indonesianID').notNullable();
    table.timestamp('birthday').notNullable();
    table.timestamp('deletedAt');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
}