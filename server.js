const inquirer = require("inquirer");
const mysql = require("mysql2");
const cfonts = require("cfonts");

// Connect to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "S11nc30242!!",
    database: "employee_db",
});

// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit",
            ],
        },
    ])
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                    case "View all employees":
                    viewAllEmployees();
                    break;
                    case "Add a department":
                    addDepartment();
                    break;
                    case "Add a role":
                    addRole();
                    break;
                    case "add an employee":
                    addEmployee();
                    break;
                    case "Update an employee role":
                    updateEmployeeRole();
                    break;
                    case "Exit":
                    connection.end();
                    console,log("Goodbye!")
                    break;
            }
        })
}
// THEN I am presented with a formatted table showing department names and department ids
const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if(err) throw err;
        console.table(res)
        promptUser()
    })
}
const viewAllRoles = () => {
    connection.query('SELECT * FROM role', function(err, res) {
        if(err) throw err;
        console.table(res)
        promptUser()
    })
}
const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', function(err, res) {
        if(err) throw err;
        console.table(res)
        promptUser()
    })
}

promptUser();

// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// THEN I am prompted to enter the name of the department and that department is added to the database

// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

// THEN I am prompted to select an employee to update and their new role and this information is updated in the database