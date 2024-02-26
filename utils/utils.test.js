// Method 1
const utils = require('./utils');

// Method 2
// const { add } = require('./utils');

// Method 1
it("Should add two numbers", () => {
    let result = utils.add(11, 33);
    if (result !== 44)
    throw new Error(`Expected 77 but got ${result}`);
});

// Method 2
// it("Should add two numbers", () => {
//     let result = add(22, 55);
//     if (result !== 77)
//     throw new Error(`Expected 77 but got ${result}`);
// });