USE employees;

INSERT INTO department (name)
VALUES 
('Marketing'),
('Accounting'),
('Management'),
('Client Service'),
('HR')

INSERT INTO roles (title, salary, department_id)
VALUES
('Owner', 10000, 0),
('Manager', 8000, 1),
('Accountant', 9000, 2),
('Engineer', 5000, 3),
('Assistant', 4000, 4)

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES 
('John', 'McBride', 0, 2),
('Paul', 'Simmons', 1, 2),
('Amber', 'Gray', 2, 2),
('Lucien', 'Patten', 3, 2),
('Nick', 'Molino', 4, 2)