INSERT INTO department (dept_name)
VALUES
    ('Executive'),
    ('Operations'),
    ('Marketing'),
    ('Booking')

INSERT INTO roles (title, salary, dept_id)
VALUES
    ('Owner', 750000, 1),
    ('Ops Manager', 60000, 2),
    ('Media Director', 55000, 3),
    ('Booking Manager', 45000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'McBride', 1, 1),
    ('Paul', 'Simmons', 2, 1),
    ('Marian', 'Mathis', 3, 0),
    ('Rolff', 'Zweip', 4, 0);