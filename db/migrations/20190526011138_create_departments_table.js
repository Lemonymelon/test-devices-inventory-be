exports.up = function(knex, Promise) {
  return knex.schema.createTable("departments", departmentsTable => {
    departmentsTable
      .increments("department_id")
      .primary()
      .unique();
    departmentsTable.string("department_name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("departments");
};
