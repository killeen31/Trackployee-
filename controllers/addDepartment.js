const inquirer = require("inquirer")
const connection = require("../config/connection.js")

const addDepartment = (promptUser) => {
    inquirer.prompt([
        {
            type:"input",
            message:"What is the name of the Department?",
            name:"deptName", 
        }
    ])
    .then((answers)=>{
        connection.query(
            "INSERT INTO departments SET ?",
            {
                dept_name:answers.deptName
            }, 
            function(err){
                console.log(err)
                if (err) throw err
                console.log('Sucessfully added new Department!')
                promptUser()
            }
        )
    })
}

module.exports = addDepartment