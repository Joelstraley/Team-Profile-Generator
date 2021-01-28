const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team = [];

function managerPrompt(){ 
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Team Manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the Team Manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the Team Manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the Team Manager's office number?",
            name: "officeNumber",
        },
    ])
    .then((data) => {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        team.push(teamMember)
        addMember();
    });
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your Engineer's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the your Engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your Engineer's GitHub username?",
            name: "github",
        },
    ])
    .then((data) => {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        team.push(teamMember)
        addMember();
    });
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your Intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the your Intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What School does your Intern attend?",
            name: "school",
        },
    ])
    .then((data) => {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school)
        team.push(teamMember)
        addMember();
    });
}

function addMember(){
    inquirer.prompt([
    {
        type: "list",
        message: "What would like to add a team member?",
        name: "newMember",
        choices: ["Yes, add an Engineer","Yes, add an Intern", "No, I have no new members to add"],
        
    },
])
.then((data) => {
    switch (data.newMember){
        case "Yes, add an Engineer":
            addEngineer();
        break;
        case "Yes, add an Intern":
            addIntern();
        break;
        case "No, I have no new members to add":
            generateTeam(team);
        break;
    }
});
}



// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};



managerPrompt(){
    .then(team)
}

fs.writeFile("./team.html", team, err => err ? console.error : console.log("success")) 

