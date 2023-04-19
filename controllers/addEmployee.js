const inquirer = require("inquirer")
const connection = require("../config/connection.js")
const { getAllRoles, getAllEmployees } = require("./getAll.js")
const { allRoles, allManagers } = require("./getAll.js")

const addEmployee = (promptUser) => {

    Promise.all([getAllRoles(), getAllEmployees()])
    .then(([roles, employees]) => {
        inquirer.prompt([
            {
                type:"input",
                name:"firstName",
                message:"What is the employee's first name?"
            },
            {
                type:"input",
                name:"lastName",
                message:"What is the employee's last name?"
            },
            {
                type:"list",
                name:"roleId",   
                message:"What is the employee's role?",
                choices: allRoles 
            },
            {
                type:"list",
                name:"manager",
                message:"Does the Emplpyee have a Manager?",
                choices: ["Yes", "No"],
            },
            {
                type:"list",
                name:"managerName",
                message:"Who is the Employee's Manager?",
                choices: allManagers,
                when: (answers) => answers.manager === "Yes",
            }
        ])
        .then((answers)=>{
            connection.query(
                "INSERT INTO employees SET ?",
                {
                    first_name:answers.firstName,
                    last_name:answers.lastName,
                    role_id:Number(answers.roleId),
                    manager_id:Number(answers.managerName),
                },
                function(err){
                    console.log(err)
                    if (err) throw err
                    console.log('Sucessfully added new Employee!')
                    promptUser()
                }  
            );
        }
    )})
    .catch((err) => console.log(err))
}
module.exports = addEmployee