const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("Update role with Engineer.", () => {
    const E = new Engineer("name", "id", "email", "github")
    expect(E.getRole()).toBe('Engineer')
})

// test("Can set a name in the constructor.", () => {
//     const name = "Kevin"
//     const E = new Employee(name, "id", "email")
//     expect(E.getName()).toBe(name)
// })