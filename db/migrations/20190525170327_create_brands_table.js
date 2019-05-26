exports.up = function(knex, Promise) {
  return knex.schema.createTable("brands", brandsTable => {
    brandsTable
      .increments("brand_id")
      .primary()
      .unique();
    brandsTable.string("brand_name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("brands");
};
