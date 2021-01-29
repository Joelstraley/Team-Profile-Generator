const Employee = require("../lib/employee");
const Manager = require("../lib/manager");


describe("Manager test", () => {
    describe("Constructor Inputs", () => {
      it("should take the new Manager name from object and place it as this.name in constructor", () => {
      
        const newManager = new Manager("Jim",6,"jim@email.com");
  
        expect(newManager.name).toBe("Jim");
      });
      it("should take the Manager ID from object and place it as the this.id in constructor", () => {
  
        const newManager = new Manager("Jim",6,"jim@email.com");
        
        expect(newManager.id).toBe(6);
      });
      it("should take the Manager email from object and place it as the this.email in constructor", () => {
  
        const newManager = new Manager("Jim",6,"jim@email.com");
        
        expect(newManager.email).toBe("jim@email.com");
      });
    });
  
  });