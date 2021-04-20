const { expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test("Update role with Intern.", () => {
    const E = new Intern("name", "id", "email", "school")
    expect(E.getRole()).toBe('Intern')
})

test("Can set a school in the constructor.", () => {
    const school = "DU"
    const E = new Intern("name", "id", "email", school)
    expect(E.getSchool()).toBe(school)
})
