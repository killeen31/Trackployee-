# Trackployee-
This is a command line application that uses MySQL to create a database to sort and track emloyees
 
- Table of contents 
-Description 
-Installation 
-Usage 
-What I learned 
-Contributing
-Credits
-License 

# User Story 
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

# Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database


# Decsription 
This is a command-line application that uses JavaScript, Express, mySQL, and node.js that allows a user to create, view, make changes and update their employee database from the command line. 


# Installation 
This app is installed by visiting my GitHub page and cloning my repository "Trackployee" 
This app was built with:
Node.js 16.18.1
Javascript
Express.js 4.18.2
Heroku 
Inquirer 8.2.4
mysql2 3.2.3

* Open the repo using vscode 

# Usage
This is an application to view and make changes to a database all from the command line of your terminal 
How to Use: 
-Run node index and follow the list of options that you have to: 
1)view employees, departments, and roles 
2)Add employees, departments, or roles
3)Delete emplpyees, departments, or roles
4)update all three 
5)view the roles by the manager 

# What I learned 
What I learned from this challenge was a lot actually, I feel like I am really getting to the point of being able to read the code really well, it taught me how to create a databse and then pull the information back from the database to be used in sorting information. I approached this differently at first as well so it also taught me that there are many ways to approach coding these challenges. Using mySQL for the first time was challenging but rewarding as well.  

# Credits 
This app can be credited to Jack Killeen with some help from the TAs and one tutoring session, we decided to change gears last second and pretty much rewite the code so one of the TAs helped a lot and lent me their github repo for reference

GitHub - killeen31 


# License 
This application uses an MIT license 

