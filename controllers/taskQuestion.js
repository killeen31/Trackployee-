const inquirer = require("inquirer")
const taskQuestion = [
    {
        type: "list", 
        name: "task", 
        message: "What would you like to do today?",
        choices: [
            new inquirer.Separator("=== VIEW INFO ==="),
            "View all Employees",
            "View Employees by Manager",
            "View all Departments",
            "View all Roles",
            new inquirer.Separator("=== ADD INFO ==="),
            "Add Employee",
            "Add Department",
            "Add Role",
            new inquirer.Separator("=== UPDATE INFO ==="),
            "Update Employee",
            new inquirer.Separator("=== DELETE INFO ==="),
            "Delete Employee",
            "Delete Department",
            "Delete Role",
            new inquirer.Separator("=== EXIT ==="),
            "Exit"
        ]
    }
]
module.exports = taskQuestion