exports.up = function(knex, Promise) {
  return knex.schema.createTable("devices", devicesTable => {
    devicesTable
      .increments("device_id")
      .primary()
      .unique();
    devicesTable
      .integer("device_brand")
      .references("brands.brands_id")
      .notNullable();
    devicesTable
      .integer("device_operating_system")
      .references("operating_systems.operating_system_id")
      .notNullable();
    devicesTable
      .integer("device_employee")
      .references("employees.employee_id")
      .notNullable();
    devicesTable
      .integer("device_estimated_time_of_return")
      .references("departments.dept_id");

    devicesTable.boolean("device_in_stock").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.dropTable("devices");
};
