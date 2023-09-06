class Shape {
    constructor(text, textColor, shapeColor){
        this.text = `<text xmlns="http://www.w3.org/2000/svg" x="100" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text`
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render(){
        return `<polygon points ="150,50 250,150 50,150" fill="${this.shapeColor}"/>`
    }
    userColor(color){
        this.shapeColor = color;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill = "${this.shapeColor}"/>`
    }
    userColor(color){
        this.shapeColor = color
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render(){
        return `<rect width="240" height="240" fill = "${this.shapeColor}"/>`
    }
    userColor(color){
        this.shapeColor = color
    }
}

module.exports = {Triangle, Circle, Square}

