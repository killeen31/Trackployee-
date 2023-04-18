INSERT INTO department (dept_name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Executives');

  INSERT INTO role (title, salary, department_id)
  VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 200000, 2),
    ('Software Engineer', 180000, 2),
    ('Accountant', 160000, 3),
    ('Legal Team Lead', 140000, 4),
    ('Lawyer', 120000, 4),
    ('CEO', 300000, 5),
    ('CFO', 280000, 5),
    ('COO', 260000, 5);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
      ('John', 'Doe', 1, null),
      ('Mike', 'Peoples', 2, 1),
      ('Ashley', 'Weiner', 3, null),
      ('Andrew', 'Turpok', 4, 3),
      ('Malia', 'Brown', 5, null),
      ('Sarah', 'Haney', 6, 5),
      ('Tom', 'Aquinas', 7, null),
      ('Mary', 'Tyler', 8, 7),
      ('Steve', 'Leb', 9, null),
      ('Emma', 'Stojova', 10, 9);

