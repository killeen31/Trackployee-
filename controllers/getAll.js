const utils = require('../utils');
const connection = require('../config/connection.js');

const queryAsync = utils.promisify(connection.query).bind(connection);

const getAllEmployees = async (value) => {
    try {
    const rows = await queryAsync('SELECT * FROM employees');
    return rows.map(employee => ({name: `${employee.first_name} ${employee.last_name}`, value: employee.id}));
} catch (err) {
    console.log(err);
}

};

const getAllRoles = async (value) => {
    try {
    const rows = await queryAsync('SELECT * FROM roles');
    return rows.map(role => ({name: role.title, value: role.id}));
} catch (err) {
    console.log(err);
}

};

const getAllDepartments = async (value) => {
    try {
    const rows = await queryAsync('SELECT * FROM departments');
    return rows.map(department => ({name: department.name, value: department.id}));
} catch (err) {
    console.log(err);
}

};

const getManagers = async (value) => {
    try {
    const rows = await queryAsync('SELECT * FROM employees WHERE manager_id IS NULL');
    return rows.map(manager => ({name: `${manager.first_name} ${manager.last_name}`, value: manager.id}));
} catch (err) {
    console.log(err);
}

};

module.exports = { getAllEmployees, getAllRoles, getAllDepartments, getManagers };
