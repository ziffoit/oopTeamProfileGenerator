const { expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test(" role with Engineer.", () => {
    const E = new Engineer("name", "id", "email", "github")
    expect(E.getRole()).toBe('Engineer')
})