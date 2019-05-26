exports.up = function(knex, Promise) {
  return knex.schema.createTable("departments", departmentsTable => {
    departmentsTable
      .increments("dept_id")
      .primary()
      .unique();
    departmentsTable.string("dept_name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.dropTable("departments");
};
