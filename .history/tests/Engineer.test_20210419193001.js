const { expect } = require("@jest/globals")
const Engineer = require("../lib/Employee")

test("Can create an employee out of the constructor.", () => {
    const E = new Employee("name", "id", "email")
    expect(typeof(E)).toBe("object")
})