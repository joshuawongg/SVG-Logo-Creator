const { Triangle, Circle, Square } = require('./shapes')

describe('Triangle', () => {
    it('returns the correct shape type and fill color when it is rendered', () => {
        const shape = new Triangle()
        let newColor = 'purple'
        shape.userColor(newColor)
        expect(shape.render()).toEqual(`<polygon points ="150,50 250,150 50,150" fill="${newColor}"/>`)
    })
})

describe('Circle', () => {
    it('returns the correct shape type and fill color when it is rendered', () => {
        const shape = new Circle()
        let newColor = 'yellow'
        shape.userColor(newColor)
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill = "${newColor}"/>`)
    })
})

describe('Square', () => {
    it('returns the correct shape type and fill color when it is rendered', () => {
        const shape = new Square()
        let newColor = 'blue'
        shape.userColor(newColor)
        expect(shape.render()).toEqual(`<rect width="240" height="240" fill = "${newColor}"/>`)
    })
})