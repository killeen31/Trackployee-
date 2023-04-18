const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "S11nc30242!!",
    database: "employee_db",
});

connection.connect((err)=>{
    if (err)throw err
    console.log ('Succesfully connected to Database!')
})

module.exports = connection 