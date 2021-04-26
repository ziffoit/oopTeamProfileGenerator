// create the team by running some functions that output a string IN HTML

const generateTeam = (team) => {
    const generateEmployee = (employee, specialItem) => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          <div>
            ${employee.getName()}
          </div>
          <div>
            ${employee.getRole()}
          </div>
            
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
          <li class="list-group-item">${specialItem}</li>
        </ul>
      </div>`;
    };
    const generateManager = (manager) => {
        return generateEmployee(
            manager,
            `Office number: ${manager.getOfficeNumber()}`
        );
    };
    const generateEngineer = (engineer) => {
        return generateEmployee(engineer, `GitHub: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>`);
    };
    const generateIntern = (intern) => {
        return generateEmployee(intern, `School: ${intern.getSchool()}`);
    };
    const html = [];

    // Grab all of the managers from our `team` array using the `filter` method.
    // Then, once we have all of the managers, each will be fed to `generateManager`
    // via our `map` method call. The final result will then get pushed to the `html` array.
    html.push(
        team
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => generateManager(manager))
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
    );
    html.push(
        team
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => generateIntern(intern))
    );

    const body = html.join("");
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ${body}
        </body>
        </html>`
};

module.exports = generateTeam;
// module.exports = team => {
//     return generateTeam
//     // 8:50 in Tuesdays class video
// }
