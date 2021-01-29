const Employee = require("./tests/employee.test.js");

describe("Employee", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with a 'Employee' property set to an empty array when called with the 'new' keyword", () => {
      // Arrange
      const employee = new Employee("Dave",5,"email@email.com");

      // Assert
      expect(employee).toEqual("Dave",5,"email@email.com");
    });
  });