let {returnTwo, greeting, add, subtract, multiply, divide} = require('./function')

describe ('functions.js test', () => {
    test('test returnTwo', () =>{
        expect(returnTwo()).toBe(2)
    })
    test('test greeting', () => {
        expect(greeting('alec')).toBe('Hello, alec')
        expect(greeting('Jill')).toBe('Hello, Jill')
    })
    test('test add', () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })
    test('test subtract', () => {
        expect(subtract(2, 1)).toBe(1)
    })
    test('test multiply', () => {
        expect(multiply(2, 1)).toBe(2)
    })
    test('test divide', () => {
        expect(divide(10, 2)).toBe(5)
    })
})