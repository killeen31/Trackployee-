const inquirer = require("inquirer");
const cfonts = require("cfonts");

const addDepartment = require("./controllers/addDepartment")
const addEmployee = require("./controllers/addEmployee")
const addRole = require("./controllers/addRole")
const dal = require("./controllers/dal")
const deleteDepartment = require("./controllers/deleteDepartment")
const deleteEmployee = require("./controllers/deleteEmployee")
const deleteRole = require("./controllers/deleteRole")
const getAll = require("./controllers/getAll")
const taskQuestion = require("./controllers/taskQuestion")
const updateEmployee = require("./controllers/updateEmployee")
const viewByMgr = require("./controllers/viewByMgr")
const queries = require("./db/queries")

function promptUser() {
    inquirer
    .prompt(taskQuestion)
        .then((answers) => {
            const task = answers.task;
            if (task === 'View all Employees') {
                dal.viewAll(queries.allEmployees).then((result) => promptUser());
            } else if (task === 'View Employees by Manager') {
                viewByMgr()
                .then((answers) => dal.viewAllBy(queries.allEmployeesByMgr, 'm.id', answers.managerId))
                .then(() => promptUser());
            }  else if (task === 'View all Roles') {
                dal.viewAll(queries.allRoles)
                .then(() => promptUser());
            } else if (task === 'View all Departments') {
                dal.viewAll(queries.allDepts)
                .then(() => promptUser());
            } else if (task === 'Add Employee') {
                addEmployee(promptUser);
            } else if (task === 'Add Role') {
                addRole().then(() => promptUser());
            }  else if (task === 'Add Department') {
                addDepartment(promptUser);
            } else if (task === 'Update Employee') {
                updateEmployee().then(() => promptUser()) 
            }  else if (task === 'Delete Employee') {
                deleteEmployee()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'employees', Number(answers.empToDelete)))
                .then(() => promptUser());
            } else if (task === 'Delete Role') {
                deleteRole()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'roles', Number(answers.roleToDelete)))
                .then(() => promptUser());
            } else if (task === 'Delete Department') {
                deleteDepartment()
                .then((answers) => dal.deleteFrom(queries.deleteId, 'departments', Number(answers.deptToDelete)))
                .then(() => promptUser());
            } else {
                process.exit();
            }
        })
        .catch((err) => console.log(err));

    }

    promptUser();

    module.exports = promptUser;
