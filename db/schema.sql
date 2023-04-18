DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(9, 2),
    department_id INTEGER NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE departments (
    id INTEGER NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (id)
);





















-- CREATE TABLE department (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   department_name VARCHAR(300) NOT NULL
-- );
-- CREATE TABLE role (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(300) NOT NULL,
--   salary DECIMAL(10,2) NOT NULL,
--   department_id INT,
--   FOREIGN KEY (department_id) 
--   REFERENCES department(id)
--   ON DELETE SET NULL
-- );
-- CREATE TABLE employee (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(50) NOT NULL,
--   last_name VARCHAR(50) NOT NULL,
--   role_id INT,
--   manager_id INT,
--   FOREIGN KEY (role_id) 
--   REFERENCES role(id)
--   ON DELETE SET NULL,
--   FOREIGN KEY (manager_id) 
--   REFERENCES employee(id)
--   ON DELETE SET NULL
-- );
