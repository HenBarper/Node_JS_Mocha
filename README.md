# Node.js Mocha

## Sections
<a name="Sections"></a>
1. [Mocha Unit Testing](#Mocha_Unit_Testing)
2. [Mocha Express Testing](Mocha_Express_Testing)
3. [Mocha Commands](#Mocha_Commands)

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


[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Mocha_Express_Testing"></a>
## Task 2: Mocha Express Testing - [video](https://www.youtube.com/watch?v=q3xCJPE4Zo0)
- 

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Mocha_Commands"></a>
## Mocha Commands
```
it("Message", () => {
    var var_name = function(parameter1, parameter2);
     if (var_name !== expected_result);
     throw new Error('Expected expected_result but got ${var_name}');
});
```

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Credits"></a>
### Contributor: Ben Harper
Website: [BenHarperWebDev](https://henbarper.github.io/benharperwebdev/)

[Back to top](#Sections)
