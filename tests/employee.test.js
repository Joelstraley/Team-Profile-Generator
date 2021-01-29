const Employee = require("../lib/employee");

describe("Employee test", () => {
  describe("Constructor Inputs", () => {
    it("should take the new Employee name from object and place it as this.name in constructor", () => {
      const newEmployee = new Employee("Dave",5,"email@email.com");

      expect(newEmployee.name).toBe("Dave");
    });
    it("should take the Employee ID from object and place it as the this.id in constructor", () => {

      const newEmployee = new Employee("Dave",5,"email@email.com");
      
      expect(newEmployee.id).toBe(5);
    });
    it("should take the Employee email from object and place it as the this.email in constructor", () => {

      const newEmployee = new Employee("Dave",5,"email@email.com");
      
      expect(newEmployee.email).toBe("email@email.com");
    });
  });

});