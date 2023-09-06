const { Triangle, Circle, Square } = require("./shapes")

function generateSVG(text, textColor, shapeColor, shape) {
    let userShape

    switch(shape) {
        case 'Triangle':
            userShape = new Triangle(text, textColor, shapeColor)
            break
        case 'Circle':
            userShape = new Circle(text, textColor, shapeColor)
            break
        case 'Square':
            userShape = new Square(text, textColor, shapeColor)
            break
    }

    let userSVG = `${userShape.render()}${userShape.text}`

    return userSVG;

}

module.exports = { generateSVG }