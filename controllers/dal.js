const consoleTable = require('console.table');
const connection = require('../config/connection.js');

const dal = {
    viewAll: function(query) {
        return new Promise((resolve, rej)=>{
            connection.query(query,(err, result) => {
                if (err) throw err;
                console.log('\n');
                console.table(result);
                console.log('\n');
                resolve(result);
            });
        })
    },
    viewAllBy: function(query, colToSearch, valueOfCol) {
        return new Promise((res, rej)=> {
            connection.query(query, [colToSearch, valueOfCol], function(err, res) {
                if (err) throw err;
                console.log('\n');
                console.table(res);
                console.log('\n');
                resolve(res);
            });
        })
    },
    deleteFrom: function(query, table, condition) {
        return new Promise((res, rej)=> {
            connection.query(query, [table. condition], function(err, res) {
                if (err) throw err;
                if (table === 'employees'){
                    console.log('you are fired!!')
                }else if (table === 'roles'){
                    console.log('role was deleted')
                }else{
                    console.log("department has been deleted from departments table")
                }
                resolve(res);
            });
        })
     
    }
}
module.exports = dal
