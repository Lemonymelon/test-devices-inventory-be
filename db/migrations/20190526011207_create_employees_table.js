exports.up = function(knex, Promise) {
  return knex.schema.createTable("employees", employeesTable => {
    employeesTable
      .increments("employee_id")
      .primary()
      .unique();
    employeesTable.string("employee_forename").notNullable();
    employeesTable.string("employee_surname").notNullable();
    employeesTable
      .integer("employee_department")
      .references("departments.department_id")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("employees");
};
