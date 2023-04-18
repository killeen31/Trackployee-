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
            new inquirer.Separator("=== VIEW INFO ==="),
            "Add Employee",
            "Add Department",
            "Add Role",
        ]
    }
]
module.exports = taskQuestion