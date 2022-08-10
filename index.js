const fs = require('fs/promises');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let employeeList = [];

function generateCards(employee){
    console.log('generateCard called');
    let headerColor = '';
    let info = '';

    if (employee.getRole() === 'Manager'){
        headerColor = 'blue';
        info = `Office Number: ${employee.officeNumber}`;
    }
    if (employee.getRole() === 'Engineer'){
        headerColor = 'red';
        info = `GitHub: <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}<a>`;
    }
    if (employee.getRole() === 'Intern'){
        headerColor = 'yellow';
        info = `School: ${employee.getSchool()}`;
    }

    fs.appendFile('./dist/index.html, '`
    <div class="col mb-4">
        <div class="card h-100">
            <h3 class="card-header" style="background-color:${headerColor} color: white;">${employee.getName()}</h3>
            <div class="card-body">
                    <h5 class="card-title">${employee.getRole()}</h5>
                    <p class="card-text">Employee ID: ${employee.getID()}</p>
                    <p class="card-text">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <p class="card-text">${info}<p>
            </div>
        </div>
    </div>
        `);
}
// writes webpage to index.html fire in dist folder, uses generateCard for employee section
function generateHTML() {
    fs.writeFile('./dist/index.html', `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="./assets/css/style.css" /> -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <title>Employee Dashboard</title>
</head>

<body>
    <div class="jumbotron text-center" style="background-color: red; color: white;">
        <h1 class="display-4">My Team</h1>
        <p class="lead">Welcome to the Employee Dashboard, here is your current team.</p>
    </div>
    <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-3">
`);
employeeList.forEach.generateCards();
}
// creates inter, pushes to employeeList, then sends flow back to employeeInfo
function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter your intern's name:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter a name.'
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter your intern's employee ID:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter an employee ID.'
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your intern's email address:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter an email address.'
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter your inter's school name:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter a school name.'
                },
            }
        ])
        .then((response) => {
            const employee = new Intern(response.name, response.id, response.email, response.school);
            employeeList.push(employee);
            employeeInfo();
        });
}
// creates engineer, pushes to employeeList, then sends flow back to employeeInfo
function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter your engineer's name:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter a name.'
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter your engineer's employee ID:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter an employee ID.'
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your engineer's email address:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter an email address.'
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter your engineer's Github username:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter a Github username.'
                },
            }
        ])
        .then((response) => {
            const employee = new Engineer(response.name, response.id, response.email, response.github);
            employeeList.push(employee);
            employeeInfo();
        });
}
// collect employee info and pushes to employeeList, if none is selected, moves to writeWebpage
function employeeInfo() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'What type of employee would you like to add to your team?',
                choices: [
                    'Engineer',
                    'Intern',
                    'None, I am finished making my team.'
                ],
            }
        ])
        .then((response) => {
            switch (response.employeeType) {
                case 'Engineer':
                    createEngineer()
                    break;
                case 'Intern':
                    createIntern()
                    break;
                case 'None, I am finished making my team.':
                    generateJumbotron()
                    break;
            }
        })
}
// grabs the managers info then passes it to employeelist, then starts employeeInfo
function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter your name:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter a name.'
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter your employee ID:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter an employee ID.'
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your email address:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter an email address.'
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter your office number:",
                validate(value) {
                    if (value) {
                        return true;
                    }
                    return 'Please enter an office number.'
                },
            }
        ])
        .then((response) => {
            const employee = new Manager(response.name, response.id, response.email, response.officeNumber);
            employeeList.push(employee);
            employeeInfo();
        });
}

function init() {
    createManager();
}

init();