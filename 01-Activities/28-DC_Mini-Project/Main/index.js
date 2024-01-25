const inquirer = require('inquirer'); // this uses the import keyword
const fs = require('fs');

const generateHTML = ({ name, location, github, linkedin }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
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


]) 
.then((answers)=>
    // { name, location, hobby, food }
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Success!")
    );
);