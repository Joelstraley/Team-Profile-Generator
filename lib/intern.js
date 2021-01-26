const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        inquirer
          .prompt([
            {
              type: "input",
              message: "What school do you attend?"
              name: "school",
            }
          ])
    }
}

module.exports = Intern;