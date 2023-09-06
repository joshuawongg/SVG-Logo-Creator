const inquirer = require('inquirer');
const { generateSVG } = require('./lib/svg')
const fs = require ('fs')


inquirer.prompt([
    {   
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters for your icon',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape should the icon be?',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color for the shape?'
    }
])
    .then(results => {
        let partSVG = generateSVG(results.text, results.textColor, results.shapeColor, results.shape)
        let fullSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${partSVG}</svg>`

        fs.writeFile('./examples/icon.svg', fullSVG, err => {
            err ? console.error(err) : console.log("Generated logo.svg")
        })
    })