const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./src/template")
const fs = require('fs');
const team = []
// prompts for name id email role and role item
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

async function askForManagerInfo() {
    const managerInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ])

    const {name, id, email, officeNumber} = managerInfo
    team.push(new Manager(name, id, email, officeNumber))
    addEngineerOrIntern()
}

async function askForEngineerInfo() {
    const engineerInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?"
        }
    ])
    const {name, id, email, github} = engineerInfo
    team.push(new Engineer(name, id, email, github))
    isTeamComplete()
}

async function askForInternInfo() {
    const internInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
    ])
    const {name, id, email, school} = internInfo
    team.push(new Intern(name, id, email, school))
    isTeamComplete()
}

function addEngineerOrIntern() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Would you like to add an engineer or intern?",
            choices: ["engineer", "intern"]
        }
    ])
    .then((val) => {
        if (val.role === "engineer") {
            askForEngineerInfo()
        } else {
            askForInternInfo()
        }

    })
}

function isTeamComplete() {
    inquirer.prompt([{
        type: "confirm",
        name: "complete",
        message: "Is your team complete?"
    }
    ])
    .then((val) => {
        if (val.complete) {
            const teamProfile = generateTeam(team)
            fs.writeFile('./dist/index.html', teamProfile, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
        } else {
            addEngineerOrIntern()
        }

    })
}



askForManagerInfo()