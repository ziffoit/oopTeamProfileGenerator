const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("Can create an employee out of the constructor.", () => {
    const E = new Engineer("name", "id", "email", git)
    expect(typeof(E)).toBe("object")
})