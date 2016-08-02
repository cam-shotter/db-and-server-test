
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function(table) {
    table.increments('catId');
    table.string('catName');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owners');
};
