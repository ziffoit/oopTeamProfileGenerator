// create the team by running some functions that output a string IN HTML

const generateTeam = (team) => {
    const generateEmployee = (employee, specialItem) => {
        return `
        <div class="col">
            <div class="card rounded-3">
                <div class="card-header bg-info">
                    <h2 class="card-title">
                        ${employee.getName()}
                    </h2>
                    <h3 class="card-subtitle">    
                        ${employee.getRole()}
                    </h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item border my-0 p-2">ID: ${employee.getId()}</li>
                    <li class="list-group-item border my-0 p-2">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item border my-0 p-2">${specialItem}</li>
                    </ul>
                </div>
            </div>
        </div>`;
    };
    const generateManager = (manager) => {
        return generateEmployee(
            manager,
            `Office number: ${manager.getOfficeNumber()}`
        );
    };
    const generateEngineer = (engineer) => {
        return generateEmployee(
            engineer,
            `GitHub: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>`
        );
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        </head>
        <body>
            <header>
                <h1 style="text-align: center;" class="text-light bg-danger py-4">My Team</h1>
            </header>
            <main class="container my-5">
                <div class="row row-cols-3 justify-content-center g-3">
                    ${body}
                </div>    
            </main>    
        </body>
        </html>`;
};

module.exports = generateTeam;
// module.exports = team => {
//     return generateTeam
//     // 8:50 in Tuesdays class video
// }
