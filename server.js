const inquirer = require("inquirer");
const mysql = require("mysql2");
const cfonts = require("cfonts");

// Connect to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "S11nc30242!!",
    database: "employee_db",
});

