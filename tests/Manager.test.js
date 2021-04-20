const { expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test("Update role with Manager.", () => {
    const E = new Manager("name", "id", "email", "officeNumber")
    expect(E.getRole()).toBe('Manager')
})

test("Can set an officeNumber in the constructor.", () => {
    const officeNumber = "5"
    const E = new Manager("name", "id", "email", officeNumber)
    expect(E.getOfficeNumber()).toBe(officeNumber)
})