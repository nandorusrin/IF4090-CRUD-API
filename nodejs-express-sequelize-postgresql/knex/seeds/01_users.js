exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
  .then(function () {
    // Inserts seed entries
    return knex('user').insert([
      {
        id: 1,
        name: 'John Doe',
        indonesianID: '1234123412341234',
        birthday: '2000-07-25T00:00:00Z'
      },
      {
        id: 2,
        name: 'John Doe Second',
        indonesianID: '1234123412341235',
        birthday: '2000-02-14T00:00:00Z'
      },
      {
        id: 3,
        name: 'John Doe Third',
        indonesianID: '1234123412341236',
        birthday: '1999-07-28T00:00:00Z'
      }
    ]);
  });
};