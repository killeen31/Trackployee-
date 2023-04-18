const inquirer = require("inquirer")
const connection = require("../config/connection.js")

const addRole = (promptUser) => {
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of the Role?",
        },
        {
            type:"number",
            name:"salary",
            message:"What is the salary of the Role?", 
        },
        {
            type:"list",
            name:"deptID",
            message:"What is the Department for this Role?", 
            choices: allDepartments
        }
    ])
    .then((answers)=>{
        connection.query(
            "INSERT INTO roles SET ?",
            {
                title:answers.roleName,
                salary:answers.roleSalary,
                department_id:Number(answers.roleDeptID)
            }, 
            function(err){
                console.log(err)
                if (err) throw err
                console.log('Sucessfully added new Role!')
                promptUser()
            }
        )
    })
}