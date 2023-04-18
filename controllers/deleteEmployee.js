const inquirer = require("inquirer")
const { getAllEmployees } = require("./getAll.js")

const toDeleteEmployee = () => {
    return new Promise ((resolve, reject) => {
        getAllEmployees()
        .then((allEmployees) =>
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'employeeToDelete',
                    message: "Which employee would you like to delete?",
                    choices: allEmployees
                },
            ])
        )
        .then((answers) => resolve(answers))
        .catch((err) => reject(err))
    });
}