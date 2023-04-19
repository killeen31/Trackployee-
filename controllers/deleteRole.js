const inquirer = require("inquirer")
const { getAllRoles } = require("./getAll.js")

const deleteRole = () => {
    return new Promise ((resolve, reject) => {
        getAllRoles()
        .then((allRoles) =>
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'roleToDelete',
                    message: "Which role would you like to delete?",
                    choices: allRoles
                },
            ])
        )
        .then((answers) => resolve(answers))
        .catch((err) => reject(err))
    });
}

module.exports = deleteRole