
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
            name: 'department_name',
            message: 'What department would you like to add?'
        }
    ]

    inquirer.prompt(deptQuestions).then((answers) => {
        const info = `INSERT INTO department (name) VALUES('${answers.department_name}')`;
        db.query(info, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.table(result);
            beginTracker();
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
            name: 'department_id',
            message: 'What is the department ID for this role?'
        },
    ]

    inquirer.prompt(roleQuestions).then((answers) => {
        const info = `INSERT INTO roles (title, salary, department_id) VALUES('${answers.title}', '${answers.salary}', '${answers.department_id}')`;
        db.query(info, (err, result) => {
            if (err) {
                console.log(err);
            } 
            console.log(result);
            beginTracker();
        });
    });
};

function addEmployee() {
    const employeeQuestions = [
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of this employee?'
        },

        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of this employee?'
        },

        {
            type: 'input',
            name: 'roles_id',
            message: 'What is the employee role ID?'
        },

        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager ID of this employee, if they are a manager? If not, just enter 0'
        }
    ]

    inquirer.prompt(employeeQuestions).then((answers) => {
        const info = `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES('${answers.first_name}', '${answers.last_name}', '${answers.roles_id}', '${answers.manager_id}')`;
        db.query(info, (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res);
            beginTracker();
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
                    (roles) => `${roles.title}`
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