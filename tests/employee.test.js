const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Constructor Inputs", () => {
    // Positive test for Name
    it("should take the new Employee name from object and place it as this.name in constructor", () => {
      // Arrange
      const newEmployee = new Employee("Dave",5,"email@email.com");

      // Assert
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

  describe("Function Inputs", () => {
    // Positive test for Name
    it("function getName() should provide the this.name from the given object", () => {
      const newEmployee = new Employee("Dave",5,"email@email.com");
      jest.fn(Employee).mockReturnValue(this.name)

    });
  });
      // Arrange



});