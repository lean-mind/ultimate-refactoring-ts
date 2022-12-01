export class SomeType {
    numbers: (number | undefined)[]
    someField: string | undefined
    child: SomeType | undefined
    constructor () {
      this.numbers = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    }

    // @ts-ignore
    firstMethod (arg1: string) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      arg1 = 'foo'
    }

    secondMethod (other: SomeType) {
      other = new SomeType()
      other.someField = 'blah'
    }

    thirdMethod (other: SomeType) {
      other.numbers[0] = 100
      other.someField = 'changed'
      other.child = new SomeType()
    }

    fourthMethod (someNumbers: (number | undefined)[]) {
      someNumbers[0] = this.numbers[0]
    }
}
