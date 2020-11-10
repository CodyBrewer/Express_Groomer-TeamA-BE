exports.seed = async (knex) => {
  // Insert services entries
  await knex('services').insert([
    { name: 'Haircut' },
    { name: 'Nail Cutting' },
    { name: 'Ear Cleaning' },
  ]);
};