
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('owners').insert({id: 1, ownerName: 'Jeff'}),
        knex('owners').insert({id: 2, ownerName: 'Rob'}),
        knex('owners').insert({id: 3, ownerName: 'Hailey'})
      ]);
    });
};
