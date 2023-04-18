const consoleTable = require('console.table');
const inquirer = require('inquirer');
const connection = require('../config/connection.js');

const dal = {
    viewAll: function(query) {
        connection.query(query, function(err, res) {
            if (err) throw err;
            console.log('\n');
            console.table(res);
            console.log('\n');
            promptUser();
        });
    },
    viewAllBy: function(query, param) {
        connection.query(query, [param], function(err, res) {
            if (err) throw err;
            console.log('\n');
            console.table(res);
            console.log('\n');
            promptUser();
        });
    },
    deleteFrom: function(query, param) {
        connection.query(query, [param], function(err, res) {
            if (err) throw err;
            console.log('\n');
            console.log('Successfully deleted!');
            console.log('\n');
            promptUser();
        });
    }
