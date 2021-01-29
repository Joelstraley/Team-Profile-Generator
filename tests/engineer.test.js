const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");


describe("Engineer test", () => {
    describe("Constructor Inputs", () => {
      it("should take the new Engineer name from object and place it as this.name in constructor", () => {
  
        const newEngineer = new Engineer("Dave",5,"email@email.com");
  
        expect(newEngineer.name).toBe("Dave");
      });
      it("should take the Engineer ID from object and place it as the this.id in constructor", () => {
  
        const newEngineer = new Engineer("Dave",5,"email@email.com");
        
        expect(newEngineer.id).toBe(5);
      });
      it("should take the Engineer email from object and place it as the this.email in constructor", () => {
  
        const newEngineer = new Engineer("Dave",5,"email@email.com");
        
        expect(newEngineer.email).toBe("email@email.com");
      });
    });
  
  });