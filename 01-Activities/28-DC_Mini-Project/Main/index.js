const inquirer = require('inquirer'); // this imports the inquirer package/module
const fs = require('fs'); // imports the fs (built-in node module)

const generateHTML = ({ name, location, github, linkedin, instagram }) => // this destructures the object, generates html and returns back with properties inserted
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        <header class="p-5 mb-4 header bg-light">
            <div class="container">
                <h1 class="display-4">Hey there, my name is ${name}</h1>
                <p class="lead">I am from ${location}.</p>
                <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
                <ul class="list-group">
                    <li class="list-group-item">Check me out on Github is ${github}</li>
                    <li class="list-group-item">Like photos? Check out my ${instagram}</li>
                    <li class="list-group-item">My LinkedIn: ${linkedin}</li>
                </ul>
            </div>
        </header>
    </body>
    </html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favourite hobby?',
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favourite food?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'instagram',
            message: 'Enter your Instagram handle',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL',
        },
]) 
.then((answers)=>
    // { name, location, hobby, food }
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Success!")
    );
);