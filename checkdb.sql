SELECT * from device_types;
SELECT * from brands;
SELECT * from operating_systems;
SELECT * from departments;
-- SELECT * from employees;
-- SELECT * from devices;

SELECT * from employees INNER JOIN departments ON employees.employee_department=departments.department_id;

SELECT * FROM devices
JOIN device_types ON devices.device_type=device_types.type_id;
