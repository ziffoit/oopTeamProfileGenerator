class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        this.role = 
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'employee'
    }
}

module.exports = Employee