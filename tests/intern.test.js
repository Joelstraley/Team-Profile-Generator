const Employee = require("../lib/employee");
const Intern = require("../lib/intern");


describe("Intern test", () => {
    describe("Constructor Inputs", () => {
      it("should take the new Intern name from object and place it as this.name in constructor", () => {
        const newIntern = new Intern("John",85,"john@email.com");

        expect(newIntern.name).toBe("John");
      });
      it("should take the Manager ID from object and place it as the this.id in constructor", () => {
  
        const newIntern = new Intern("John",85,"john@email.com");
        
        expect(newIntern.id).toBe(85);
      });
      it("should take the Manager email from object and place it as the this.email in constructor", () => {
  
        const newIntern = new Intern("John",85,"john@email.com");
        
        expect(newIntern.email).toBe("john@email.com");
      });
    });
  
  });