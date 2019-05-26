exports.up = function(knex, Promise) {
  return knex.schema.createTable("device_types", typesTable => {
    typesTable
      .increments("type_id")
      .primary()
      .unique();
    typesTable.string("type_name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("device_types");
};
