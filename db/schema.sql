DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

-- THEN I am presented with the following options: 
-- view all departments, view all roles, view all employees, 
-- add a department, add a role, add an employee, 
-- and update an employee role

CREATE TABLE department (
-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table 
-- showing department names and department ids
id INTEGER AUTO_INCREMENT PRIMARY KEY,
dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee (
-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table 
-- showing employee data, including employee ids, 
-- first names, last names, job titles, departments, 
-- salaries, and managers that the employees report to
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,

manager_id INTEGER,
FOREIGN KEY (manager_id) REFERENCES employee(id)

role_id INTEGER.
FOREIGN KEY (role_id) REFERENCES roles(id)

-- dept VARCHAR(30)
);

CREATE TABLE roles (
-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, 
-- the department that role belongs to, 
-- and the salary for that role
id INTEGER AUTO_INCREMENT PRIMARY KEY,
job_title VARCHAR(30) UNIQUE NOT NULL,
salary INTEGER NOT NULL,
dept_id INTEGER NOT NULL
FOREIGN KEY (dept_id) REFERENCES department(id)
);