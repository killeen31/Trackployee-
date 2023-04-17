INSERT INTO departments (department_name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');
  ('Executives');

  INSERT INTO roles (title, salary, department_id)
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

    INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES
      ('John', 'Doe', 1, 9),
      ('Mike', 'Peoples', 2, 1),
      ('Ashley', 'Weiner', 3, 9),
      ('Andrew', 'Turpok', 4, 3),
      ('Malia', 'Brown', 5, 9),
      ('Sarah', 'Haney', 6, 9),
      ('Tom', 'Aquinas', 7, 6),
      ('Mary', 'Tyler', 8, 9),
      ('Steve', 'Leb', 9, NULL),
      ('Emma', 'Stojova', 10, 9),
      ('Jack', 'Killeen', 11, 9);

