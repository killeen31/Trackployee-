const mysql = require('mysql2')
const { promisify } = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Killeen1!!",
    database: "employee_db",
});

connection.connect((err)=>{
    if (err)throw err
    console.log ('Succesfully connected to Database!')
})

module.exports = connection 
module.exports.query = promisify(connection.query).bind(connection)