# Node.js Mocha

## Sections
<a name="Sections"></a>
1. [Mocha Unit Testing](#Mocha_Unit_Testing)
2. [Mocha Express Testing](Mocha_Express_Testing)
3. [Mocha Commands](#Mocha_Commands)
4. [Installs](#Installs)
5. [Errors](#Errors)

[Credits](#Credits)
__________________________________________________________________________________________________________________________________________
<a name="Mocha_Unit_Testing"></a>
## Task 1: Mocha Unit Testing - [video](https://www.youtube.com/watch?v=oJWOmT5UZYw)
- When a module is installed with `--save-dev` and added to dev dependencies it is for development purposes and not in the live production
- When setting up commands in the package.json custom commands need the run keyword
    - Built-in: `npm test   
    - Custom: `npm run custom_script`
- We're using the command `mocha **/*.test.js`
    - the `**` means mocha will check every folder of the current working directory/repo
    - the second `*.test.js` will look for any file that ends with test.js
- We don't have to require mocha in the test file if we are running it with mocha
- Use the `it()` function to test simple functions
- The toBe() function from expect is only good for strings and numbers
    toEqual() can be used to compare objects


[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Mocha_Express_Testing"></a>
## Task 2: Mocha Express Testing - [video](https://www.youtube.com/watch?v=q3xCJPE4Zo0)
- 

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Mocha_Commands"></a>
## Mocha Commands

### Mocha
#### it()
```
it("Message", () => {
    var var_name = function(parameter1, parameter2);
     if (var_name !== expected_result);
     throw new Error('Expected expected_result but got ${var_name}');
});
```

### Expect
#### expect().toBe()
`expect(result).toBe(expected_result);`
    - You can put this in the it() function
#### expect().toEqual()
`expect(result_object).toBe(expected_object);`

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Installs"></a>
## Installs

- --save-dev for dev mode only
    - `npm install mocha --save-dev`
    - `npm install expect --save-dev`

`npm rm module_name`
    - Removes a module and the dependency in package.json

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Errors"></a>
## Errors
- The tests using `expect(result).toBe(expected_results);` are not functioning properly
    ```
    TypeError: expect is not a function
      at Context.<anonymous> (utils\utils.test.js:45:5)
      at process.processImmediate (node:internal/timers:478:21)
    ```

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Credits"></a>
### Contributor: Ben Harper
Website: [BenHarperWebDev](https://henbarper.github.io/benharperwebdev/)

[Back to top](#Sections)
