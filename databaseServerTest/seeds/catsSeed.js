
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({catId: 1, catName: 'Fluff'}),
        knex('cats').insert({catId: 2, catName: 'Buzz'}),
        knex('cats').insert({catId: 3, catName: 'Paws'})
      ]);
    });
};
