const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    } 
} 

/* Create team function- then add Engineer function
    - if they choose Enginer/ 
---at the end have RENDER(arraywhereinfowaspushed)


//Employee has most tests 
---testing AARAY (does push work 00using IN ---fake array (does array))

---return this.name  */


module.exports = Manager;

