// GIVEN a command-line application that accepts user input

// WHEN I start the application
// THEN I am presented with the following options: view all departments, 
// view all roles, view all employees, 
// add a department, add a role, add an employee, 
// and update an employee role

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing 
// department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, 
// the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, 
// including employee ids, first names, last names, job titles, departments, 
// salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department 
// and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department 
// for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, 
// last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and 
// their new role and this information is updated in the database

// const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Salt&Burn67',
        database: 'employees'
    },

    console.log('You are connected!')
);

function beginTracker() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choose',
            message: 'What do you want to do?',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee'
            ],
        }
    ]).then(function(val) {
        // use a switch to cycle through the choices and prompt accordingly with a function
        switch (val.choose) {
            case 'View departments':
                viewDepts();
            break;

            case 'View roles':
                viewRoles();
            break;

            case 'View employees':
                viewEmployees();
            break;

            case 'Add department':
                addDept();
            break;

            case 'Add role':
                addRole();
            break;

            case 'Add employee':
                addEmployee();
            break;

            case 'Update employee':
                updateEmployee();
            break;
        }
    })
}

// view functions

function viewDepts() {
    db.query('SELECT * from department', (err, res) => {
        if (err) throw (err);
        console.table(res);
        beginTracker();
    })
};

function viewRoles() {
    db.query('SELECT * from roles', (err, res) => {
        if (err) throw (err);
        console.table(res);
        beginTracker();
    })
};

function viewEmployees() {
    db.query('SELECT * from employee', (err, res) => {
        if (err) throw (err);
        console.table(res);
        beginTracker();
    })
};

// add functions
function addDept() {
    const deptQuestions = [
        {
            type: 'input',
            name: 'title',
            message: 'What department would you like to add?'
        }
    ]

    inquirer.prompt(deptQuestions).then((answers) => {
        const info = `INSERT INTO department (dept_name) VALUES('${answers.title}')`;
        db.query(info, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
};

function addRole() {
    const roleQuestions = [
        {
            type: 'input',
            name: 'title',
            message: 'What role would you like to add?'
        },

        {
            type: 'input',
            name: 'salary',
            message: 'What is their salary?'
        },

        {
            type: 'input',
            name: 'deptId',
            message: 'What is the department ID for this role?'
        },

        {
            type: 'input',
            name: 'job_title',
            message: 'What is the job title for this role?'
        }
    ]

    inquirer.prompt(roleQuestions).then((answers) => {
        const info = `INSERT INTO roles (job_title, salary, dept_id) VALUES('${answers.title}', '${answers.salary}', '${answers.deptId}')`;
        db.query(info, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
};

function addEmployee() {
    const employeeQuestions = [
        {
            type: 'input',
            name: 'firstname',
            message: 'What is the first name of this employee?'
        },

        {
            type: 'input',
            name: 'lastname',
            message: 'What is the last name of this employee?'
        },

        {
            type: 'input',
            name: 'roleId',
            message: 'What is the employee role ID?'
        },

        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manager ID of this employee, if they are a manager? If not, just enter 0'
        }
    ]

    inquirer.prompt(employeeQuestions).then((answers) => {
        const info = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES('${answers.firstname}', '${answers.lastname}', '${answers.roleId}', '${answers.managerId}')`;
        db.query(info, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
};

// update employee
function updateEmployee() {
    const staff = `SELECT * FROM employee`;
    db.query(staff, (err, result) => {
        if (err) {
            console.log(err);
        }

        const staffNames = result.map(
            (employee) => `${employee.first_name} ${employee.last_name}`
        );
        const updateStaff = [
            {
                type: 'list',
                name: 'employee',
                message: 'What profile would you like to edit?',
                choices: staffNames,
            }
        ]

        inquirer.prompt(updateStaff).then((answers) => {
            const info = `SELECT * FROM roles`;
            db.query(info, (err, result) => {
                if (err) {
                    console.log(err);
                }
                const roleName = result.map(
                    (roles) => `${roles.job_title}`
                );

                const updateRoleQuestions = [
                    {
                        type: 'list',
                        name: 'roles',
                        message: 'Which role do you want to update to?',
                        choices: roleName
                    }
                ]
                inquirer.prompt(updateRoleQuestions).then((answers));
            });
        });
    })   
};

beginTracker();