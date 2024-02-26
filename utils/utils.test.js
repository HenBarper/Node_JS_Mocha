// file name method
// const utils = require('./utils');

// function name method
const { add, square, asyncAdd } = require('./utils');

const expect = require('expect');

// file name method
// it("Should add two numbers", () => {
//     let result = utils.add(11, 33);
//     if (result !== 44)
//     throw new Error(`Expected 77 but got ${result}`);
// });


// function name method
// without expect
// 22 + 55 = 77
it("Should add two numbers", () => {
    const result = add(22, 55);
    if (result !== 77)
    throw new Error(`Expected 77 but got ${result}`);
});

// 5^2 = 25
it("Should square a number", () => {
    const result = square(5);
    if (result !== 25)
    throw new Error(`Expected 25 but got ${result}`);
});

it('Should add two numbers asynchronously', (done) => {
    asyncAdd(4,8, (sum) => {
        if (sum !== 12)
        throw new Error(`Expected 12 but got ${sum}`);
        done();
    })
});


//  ------------------------- EXPECT HAS ERRORS ---------------------------------------
//  ------------------------- CURRENTLY NOT WORKING ---------------------------------------
// with expect
// 33 + 66 = 99
// it("Should add two numbers", () => {
//     const result = add(33, 66);

//     expect(result).toBe(99);
// });

// 6^2 = 36
// it("Should square a number", () => {
//     const result = square(6);
    
//     expect(result).toBe(36);
// });