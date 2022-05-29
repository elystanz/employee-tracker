INSERT INTO department (dept_name)
VALUES
    ('Executive'),
    ('Operations'),
    ('Marketing'),
    ('Booking')

INSERT INTO job_role (job_title, dept_id, salary)
VALUES
    ('Owner', 1, 750000),
    ('Operations Manager', 60000, 2),
    ('Media Director', 55000, 3),
    ('Booking Manager', 45000, 4);

INSERT INTO employee (first_name, last_name, role_id, salaries, manager_id)
VALUES
    ('John', 'McBride', 1, 750000, NULL),
    ('Paul', 'Simmons', 2, 1),
    ('Marian', 'Mathis', 3, 1).
    ('Rolff', 'Zweip', 4, 1);