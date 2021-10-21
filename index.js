const fs = require('fs');
const inquirer = require('inquirer');
//const Choices = require('inquirer/lib/objects/choices');


const generatePage = require('./src/page-template');



const mainData = () => {
   
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Write your Project Name here:(Required)',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter your name!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide some information about your project (like overview of how it works, technologies used, future implements and challenges):(Required)'
            },
            {
                type: 'input',
                name: 'link',
                message: 'Link to deployed application:(Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter link!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please guide us step-by-step description of how to get the development environment running.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions and examples for use'
            },
            {
                type: 'fuzzypath',
                name: 'path',
                excludePath: nodePath => nodePath.startsWith('node_modules'),
                excludeFilter: nodePath => nodePath == '.',
                itemType: 'any',
                rootPath: 'app',
                message: 'Select a target directory for your image:(add it to your README using the following syntax:![alt text](assets/images/screenshot.png))',
                default: '',
                suggestOnly: false,
                depthLimit: 5
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Add contributors:'
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'What type of licence you have?',
                choices: ["Apache",
                          "Academic",
                          "GNU",
                          "ISC",
                          "MIT",
                          "Mozilla",
                          "Open"]
            },
            {
               type: 'input',
                name: 'tests',
                message: 'What commands are needed to test this app?'
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is your GitHub user-name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your user-name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your Email address?',
                validate: nameInput => {
                    if (nameInput) {
                       return true;
                    } else {
                       console.log('Please enter your Email!');
                       return false;
                    }
                }
            },
    ]);
}


mainData()
.then(READMEdata => {
    const pageHTML = generatePage(READMEdata); 
    fs.writeFile('./dist/index.html', pageHTML, err =>{
    if(err) throw err;
    console.log('file created!');
   });
});




