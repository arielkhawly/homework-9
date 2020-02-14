const inquirer = require("inquirer");
const fs = require('fs');
const axios = require('axios');

inquirer
    .prompt([
        {
            type: "input", // put commas after every one
            message: "What is your GitHub user name?", // need to retive bio pic and email
            name: "username"
        },
        {
            type: "input",
            message: "What is your project called?",
            name: "project_title"
        },
        {
            type: "input",
            message: "Please provide a description of your project",
            name: "description"
        },
        {
            type: "list",
            message: "What kind of liscence are you using?",
            name: "liscence",
            choices: [  
                "MIT",
                "Apache 2.0",
                "GPL 3.0",
                "BSD 3",
                "None"

            ]
        }, {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "install_command"

        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "tests_command"
        },
        {
            type: "input",
            message: "What does this user need to know about using the repo?",
            name: "repo_info"
        },
        {
            type: "input",
            message: "What does this user need to know about contributing to the repo?",
            name: "repo_contribution"
        }
    ])
    .then(function (promptAnswers) {
        // axios call to github api
        axios.get(`https://api.github.com/users/${promptAnswers.username}`).then(function (resp) {
            console.log(resp.data)
            // create a string that consists of all the readme's content
            // use a guide on markdown syntax to format everything properly
            // add backticks to work with es6+ values 
            let readmeContent = `
                # ${promptAnswers.project_title} 
               ${promptAnswers.description}
               *
            `

        })
        // 
        function writeToFile(fileName, data) {



        }
    });

function init() {

}

init();

// fs.writeFile("README2.md", process.argv[2], function (err) {

//     if (err) {
//         return console.log(err);
//     }

//     console.log("Success!");

// });
