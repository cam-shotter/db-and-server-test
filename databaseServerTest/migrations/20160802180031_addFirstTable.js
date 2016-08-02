
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('owners', function(table) {
    table.increments('id');
    table.string('ownerName');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners');
};
