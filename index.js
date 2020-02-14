const questions = [

];
let inquirer = require("inquirer");
let fs = require('fs');
let axios = require('axios');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?", // need to retived bio pic and email
            name: "username"
        },
        {
            type: "input",
            message: "What is your project called?",
            name: "project title"
        },
        {
            type: "input",
            message: "Please provide a description of your project",
            name: "description"
        }
    ])
    .then(function (response) {
        axios.get(`https://api.github.com/users/${response.username}`).then(function (resp) {
            console.log(resp.data)

            
        })
        function writeToFile(fileName, data) {
            // let fileName = data.name.toLowerCase().split(' ').join('') + ".json";

            // fs.writeFile(filNname, JSON.stringify(data, null, '\t'), function (err) {

            //     if (err) {
            //         return console.log(err);
            //     }

            //     console.log("Success!");

            // });



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
