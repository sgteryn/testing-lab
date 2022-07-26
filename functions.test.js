const { returnTwo,greeting, add, mathFunctions} = require("./functions")

test("returns 2", () => {
    expect(returnTwo()).toBe(2)
})

test("returns greeting",() => {
    expect(greeting('James')).toBe('Hello, James.')
    expect(greeting('Jill')).toBe('Hello, Jill.')
} )


// describe("Math Functions", () => {
test("add function",() => {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
} )
// test("subtract function",() => {
//     expect(subtract(5,2)).toBe(3)
//     expect(subtract(20,9)).toBe(11)
// } ),
// test("multiplication function",() => {
//     expect(multiply(2,2)).toBe(4)
//     expect(multiply(10,9)).toBe(90)
// } ),
// test("division function",() => {
//     expect(divide(10,2)).toBe(5)
//     expect(divide(100,10)).toBe(10)
// } )
// }
// )


// describe("Math Functions", () => {
//     describe("add function",() => {
//         it("adds 1+2", () => {
//         expect(add(1,2)).toBe(3);
//         });
//         it("adds 5+9", () => {
//         expect(add(5,9)).toBe(14);
//         });
//     });
//     describe("subtract function",() => {
//         it("subtracts 5-2", ()=> {
//         expect(subtract(5,2)).toBe(3);
//         });
//         it("subtracts 20-9", ()=> {
//         expect(subtract(20,9)).toBe(11);
//         });
//     });
//     describe("multiplication function",() => {
//         it("multiplies 2*2", ()=> {
//         expect(multiply(2,2)).toBe(4);
//         });
//         it("multiplies 10*9", ()=> {
//         expect(multiply(10,9)).toBe(90);
//         });
//     });
//     describe("division function",() => {
//         it("divides 10/2", ()=> {
//         expect(divide(10,2)).toBe(5);
//         });
//         it("divides 100/10", ()=> {
//         expect(divide(100,10)).toBe(10);
//         });
//     });
    // }
    // )