const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with a 'Employee' property set to an empty array when called with the 'new' keyword", () => {
      // Arrange
      const newEmployee = new Employee("Dave",5,"email@email.com");

      // Assert
      expect(newEmployee.name).toBe("Dave");
    });
  });
});