const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("Replace .", () => {
    const E = new Engineer("name", "id", "email", "github")
    expect(E.getRole()).toBe('Engineer')
})