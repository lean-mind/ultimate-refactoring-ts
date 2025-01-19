# Ultimate Refactoring TypeScript

## Exercises

1. `koans`. Try to understand how JavaScript works with values and references through a series of koans.
2. `valueAndReference`. Uncomment the tests with correct result for koans in order that everything will work.
3. `implementationChange`. Make ShoppingCart that will work with a list of prices instead of only one price.
4. `signatureChange`. Try different levels:
    - At `CsvBuilder`, remove middle method
    - Use parallel change for use an object value `ID` instead of `number` at `AuthenticationService`.
    - Try to make it been smart: using parallel change + inline and finally a parameter object
    - Try to change the Player constructor for having only one.
5. `implementationChange`:
    - at ShoppingCart, try to use `Price`, instead of `number`
    - change all methods related to price as `number` in order to use `Price`
    - parallel implementation and manual replacement of callers
        - parallel implementation + inline method
        - wrap return object
6. `moveResponsability`:
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
7. `dependencyChange`:
    - Detect smell at package
    - Invert the dependency from Finder to UserRepository

## Setup

Node v22 is required to run this project.

> 💡If you don't have it installed, we recommend the use of a version manager
> like [_nvm_](https://github.com/nvm-sh/nvm) or [_fnm_](https://github.com/Schniz/fnm) (a cross-platform alternative to
> _nvm_). After installing the manager, you can install the Node version by running: `nvm use` or `fnm use`.

Once you have Node installed, you can install the project dependencies by running:

`npm install`

### Plugins

This project uses the following plugins:

- [Vitest](https://vitest.dev/), a blazing fast test framework.
- [Biome](https://biomejs.dev/), a toolchain for linting and formatting.

> ℹ️ If VSCode is your editor of choice, you can install the recommended extensions.

## Run tests

You can run the tests by running:

`npm run test`

If you want to run the tests in watch mode, you can run:

`npm run test:watch`

Also, you can run the tests with coverage by running:

`npm run test:coverage`
