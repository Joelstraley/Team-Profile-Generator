class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?"
              name: "name",
            }
          ])
    }
    getId(){
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your employee ID?"
              name: "ID",
            }
          ])
    }
    getEmail(){
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your email?"
              name: "email",
            }
          ])

    }
    getRole(){
        return 'Employee'
    }
}

module.exports = Employee;



