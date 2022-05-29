DROP DATABASE if exists employees;

CREATE DATABASE employees;

USE employees;

-- THEN I am presented with the following options: 
-- view all departments, view all roles, view all employees, 
-- add a department, add a role, add an employee, 
-- and update an employee role

CREATE TABLE department (
-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table 
-- showing department names and department ids
id INTEGER AUTO_INCREMENT PRIMARY KEY,
dept_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE job_role (
-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, 
-- the department that role belongs to, 
-- and the salary for that role
id INTEGER AUTO_INCREMENT PRIMARY KEY,
job_title VARCHAR(30) UNIQUE NOT NULL,
dept_id INTEGER NOT NULL,
salary INTEGER NOT NULL
);

CREATE TABLE employee (
-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table 
-- showing employee data, including employee ids, 
-- first names, last names, job titles, departments, 
-- salaries, and managers that the employees report to
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER NOT NULL,
dept VARCHAR(30),
salaries INTEGER NOT NULL,
manager VARCHAR(30)

FOREIGN KEY (manager) 
REFERENCES employee(id) 
ON DELETE SET NULL
);