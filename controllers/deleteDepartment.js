
const inquirer = require('inquirer');
const { getAllDepts, getAllDepartments } = require('./getAll');

const deleteDepartment = () => {
    return new Promise ((resolve, reject) => {
        getAllDepartments()
        .then((allDepts) =>
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'deptToDelete',
                    message: "Which department would you like to delete?",
                    choices: allDepts
                },
            ])
        )
        .then((answers) => resolve(answers))
        .catch((err) => reject(err))
    });
};

module.exports = deleteDepartment;


















// const inquirer = require("inquirer")
// const { getAllDepartments } = require("../controllers/dal.js")

// const toDeleteDept = () => {
//     return inquirer.prompt([
//         {
//             type:"list",
//             name:"deptToDelete",
//             message:"Which Department would you like to delete?",
//             choices: getAllDepartments()
//         }
//     ])
// }
//     .then((answers)=> resolve(answers))
//     .catch((err)=> reject(err))

// module.exports = toDeleteDept