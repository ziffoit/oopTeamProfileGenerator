const Employee = require("../lib/Employee")

test("Can create an employee out of the constructor.", () => {
    const E = new Employee()
    expect(typeof(E)).toBe("object")
})
test("Can set a name to the constructor.", () => {
    const name = "Kevin"
    const E = new Employee(name)
    expect(typeof(E)).toBe("object")
})