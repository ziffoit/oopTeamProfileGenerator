const Employee = require("../lib/Employee")

test("Can create an employee out of the constructor.", () => {
    const E = new Employee()
    expect(typeof(E)).toBe("object")
})
test("Can set a name to the constructor.", () => {
    const name = "Kevin"
    const E = new Employee(name, "id", "")
    expect(E.name).toBe(name)
})
test("Can set an id to the constructor.", () => {
    const id = "1"
    const E = new Employee("name", id, "email")
    expect(E.id).toBe(id)
})
test("Can set an email to the constructor.", () => {
    const email = "ziffoit@gmail.com"
    const E = new Employee("name", "id", email)
    expect(E.email).toBe(email)
})