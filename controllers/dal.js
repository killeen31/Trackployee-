const consoleTable = require('console.table');
const inquirer = require('inquirer');
const connection = require('../config/connection.js');

const dal = {
    viewAll: function(query) {
        connection.query(query, function(err, res) {
            if (err) throw err;
            console.table(res);
            promptUser();
        });
    }