const Employee = require("./employee");
const fs = require('fs');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    } 
    askToAdd() {
        inquirer
          .prompt([
            {
              type: "list",
              message: "Do you want to add another employee?"
              name: "addEmployee",
              choices: ["Engineer", "Intern", "No, I'm Done"],
            }
          ])
          .then(val => {
            if (val.addEmployee ==== "Employee") {
              this.Intern();
            } else if(val.addEmployee === "Intern"){
              this.Intern();
            } else {
                const generateHTML = ` `
                fs.writeFile("index.html", generateHTML) 
            }

          });
      }
} 



module.exports = Manager;

