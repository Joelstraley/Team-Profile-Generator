const Employee = require("./employee");



class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return 'Engineer'
    }
    getGithub(){
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub username?"
              name: "gitHub",
            }
          ])
          
    }
}

const Engineer = new Engineer 

///// inside of then Push to ARRAY outside of the THEN and build html piece by piece 


module.exports = Engineer;