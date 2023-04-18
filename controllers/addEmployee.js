const inquirer = require("inquirer")
const connection = require("../config/connection.js")


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
                name:"role",   
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
                when: (answers) => answers.manager === "Yes"
            }

        ]))

















// const addEmployee = (promptUser) => {
//     inquirer.prompt([
//         {
//             type:"input",
//             message:"What is the name of the Employee?",
//             name:"employeeName",
//         }
//     ])
//     .then((answers)=>{
//         connection.query(
//             "INSERT INTO * employees SET ?",
//             {
//                 first_name:answers.employeeName
//             },
//             function(err){
//                 console.log(err)
//                 if (err) throw err
//                 console.log('Sucessfully added new Employee!')
//                 promptUser()
//             }
//         )
//     }

// module.exports = addEmployee 