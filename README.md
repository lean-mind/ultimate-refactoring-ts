# Ultimate Refactoring TypeScript

This is a template repository. So just use the template and once you have your repository cloned on your pc just run `npm install` for installing all the dependencies.

## Scripts

```json
"prepare": "npm run build",
"prestart": "npm run build",
"start": "node build/index.js",
"dev": "npm run build -- --watch & nodemon build/index.js",
"build": "npm run lint && npm test && tsc",
"lint": "eslint . --ext .ts",
"lint:fix": "npm run lint -- --fix",
"test": "jest --verbose",
"test:watch": "npm t -- --watchAll",
"test:coverage": "npm t -- --coverage"
```

## Test config

```json
{
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|js)", 
    "**/?(*.)+(spec|test).+(ts|js)"
  ],
  "transform": {
    "^.+\\.(ts)?$": "ts-jest"
  }
}
```

## Linter config

```json
{
    "env": {
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"]
    }
}
```


## Exercises

1. `valueAndReference`. Uncomment the tests with correct result for koans in order that everything will work.
2. `implementationChange`. Make  ShoppingCart that will work with a list of prices instead of only one price.
3. `signatureChange`. Try different levels:
   - At `CsvBuilder`, remove middle method
   - Use parallel change for use an object value `ID` instead of `number` at `AuthenticationService`.
   - Try to make it been smart: using parallel change + inline and finally a parameter object
   - Try to change the Player constructor for having only one.
4. `implementationChange`:
   - at ShoppingCart, try to use `Price`, instead of `number`
   - change all methods related to price as `number` in order to use `Price`
   - parallel implementation and manual replacement of callers
     - parallel implementation + inline method
     - wrap return object
5. `moveResponsability`:
   - God class
     - use extract delegate to move them to a new class
     - add parameter + make static + convert to instance
     - create class dependency + move + encapsulate field + inline
     - pull down
   - InvoiceService - feature envy:
     - make static + move + convert to instance
     - extract parameter + move
     - extract method + move
     - remove InvoiceService automatically
       - inheritance + create default constructor + inline constructor
6. `dependencyChange`:
   - Detect smell at package
   - Invert the dependency from Finder to UserRepository
