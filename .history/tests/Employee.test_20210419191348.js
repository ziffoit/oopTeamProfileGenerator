const { expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("Can create an employee out of the constructor.", () => {
    const E = new Employee("name", "id", "email")
    expect(typeof(E)).toBe("object")
    
})
test("Can set a name in the constructor.", () => {
    const name = "Kevin"
    const E = new Employee(name, "id", "email")
    expect(E.name).toBe(name)
})
test("Can set an id in the constructor.", () => {
    const id = "1"
    const E = new Employee("name", id, "email")
    expect(E.id).toBe(id)
})
test("Can set an email in the constructor.", () => {
    const email = "ziffoit@gmail.com"
    const E = new Employee("name", "id", email)
    expect(E.email).toBe(email)
})
test("Can set a role in the constructor.", () => {
    const role = "cat"
    const E = new Employee("name", "id", "email", role)
    expect(E.role).toBe(role)
})