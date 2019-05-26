exports.up = function(knex, Promise) {
  return knex.schema.createTable("operating_systems", operatingSystemsTable => {
    operatingSystemsTable
      .increments("operating_system_id")
      .primary()
      .unique();
    operatingSystemsTable.string("operating_system_name").notNullable();
    operatingSystemsTable.string("operating_system_producer").notNullable();
    operatingSystemsTable.string("operating_system_build").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.dropTable("operating_systems");
};
