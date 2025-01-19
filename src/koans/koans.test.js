import { beforeEach, describe, expect, it } from 'vitest'

const context = describe

describe('the JavaScript language', function () {
  describe('has different types and operators that', function () {
    it('considers numbers to be equal to their string representation', function () {
      var result = 1 == '1'
      expect(result).toBeTruthy()

      result = 1 != '1'
      //expect(result).toBeFalsy();
    })

    it('knows that numbers and strings are not exactly the same', function () {
      var result = 1 === '1'
      //expect(result).toBeFalsy();

      result = 1 !== '1'
      //expect(result).toBeTruthy();
    })

    it('joins parts as string when using the plus operator', function () {
      var result = 1 + 'a'
      //expect(result).toEqual("");
    })

    it('operates integers before joining the string', function () {
      //expect(1 + 1 + "2").toEqual('');
    })

    it('knows the type of the variable', function () {
      var x = 1
      var result = typeof x
      //expect(result).toEqual('number');
    })

    it('considers an empty string to be falsy', function () {
      expect('' == false).toBeTruthy() // Truthy or Falsy
      //expect("" === false).toBe.....();// Truthy or Falsy
    })

    it('considers zero to be falsy', function () {
      //expect(0 == false).toBe...();// Truthy or Falsy
      //expect(0 === false).toBe.....();// Truthy or Falsy
    })

    it('considers nulls to be falsy', function () {
      var x = null
      var result
      if (x) {
        result = true
      } else {
        result = false
      }

      //expect(result == false).toBe......();// Truthy or Falsy
      //expect(null === false).toBe.....();// Truthy or Falsy
      //expect(null == false).toBe....();// Truthy or Falsy
    })

    it('knows the type of a function', function () {
      function x() {}

      //expect(typeof(x)).toBe('function');
      //expect(typeof(xxx)).toBe('...');
    })

    it('has arrays and they can contain anything inside', function () {
      var arr = [1, 2, 3, 4]
      arr.push(5)
      arr[9] = 6
      var matrix = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 7, 8],
      ]

      /*
      expect(arr[1]).toEqual();
      expect(arr[4]).toEqual();
      expect(arr[6]).toEqual();
      expect(arr[9]).toEqual();
      expect(matrix[0][2]).toEqual();
      */
    })

    it('may contain functions inside arrays', function () {
      var arr = [
        1,
        2,
        function (arg) {
          return 3 + arg
        },
      ]

      //expect(arr[2](1)).toEqual();
    })

    it('concatenate arrays - well, kind of', function () {
      var a = [1, 2, 3]
      var b = [4, 5, 6]

      //expect(a + b).toEqual();
    })

    it('joins arrays and strings', function () {
      var a = [1, 2, 3]

      //expect ("1" + a).toEqual();
      //expect(a + "1").toEqual();
    })

    it('joins arrays and other things', function () {
      var a = [1, 2, 3]
      var b = ['x', 'y', 'z']

      //expect(1 + a).toEqual();
      //expect(a + 1).toEqual();
      //expect(1 + b).toEqual();
      //expect(true + a).toEqual();
    })

    it("can't compare arrays", function () {
      var a = [1, 2, 3]
      var b = [1, 2, 3]

      //expect(a == b).toBe.....();  // Truthy or Falsy
      //expect(a === b).toBe.....(); // Truthy or Falsy
    })

    it('is not the same to compare by value than by reference ', function () {
      var a = [1, 2, 3]
      var b = [1, 2, 3]

      // .toEqual is a smart Jasmine function that is able to dig into
      // objects (and so arrays) and compare their content
      //expect(a).toEqual(b);

      // .toBe means the two operands are exactly the same thing
      //expect(a).not.toBe(b);
      // .toBe is like ===
      //expect(2).not.toBe("...");
    })

    it('surprises me, NaN is not comparable with NaN', function () {
      expect(5 / 'a' == 5 / 'a').toBeFalsy()
      //expect((5 / "a") === (5 / "a")).toBe...();
      //expect(typeof(NaN)).toEqual();
      expect(isNaN(5 / 'a')).toBeTruthy()
    })
  })

  describe('considers functions as first class citizens so that', function () {
    it('can declare named functions', function () {
      function example() {
        return 'some example'
      }

      //expect(example()).toEqual();
    })

    it('expressions are evaluated inside-out', function () {
      function a(x) {
        return x + 1
      }
      function b(x) {
        return x * 2
      }
      function c(x) {
        return x + 3
      }

      var result = b(1)
      //expect(result).toBe();

      result = a(b(1))
      //expect(result).toBe();

      //expect(a(b(c(1)))).toBe();
    })

    it('can declare anonymous functions', function () {
      var someVar = function (a, b) {
        return a + b
      }

      //expect(typeof(someVar)).toBe();
      //expect(someVar(1,1)).toBe();
    })

    it('may return anything', function () {
      function example(arg) {
        return [arg, arg * 2, arg * 3]
      }

      var result = example(2)

      //expect(result[1]).toEqual();
    })

    it('may return arrays that contains functions and so on', function () {
      function example() {
        // write the missing code here
      }

      //expect(example()[0](1)[1]).toEqual(10);
    })

    it("doesn't care about the declaration order when they are named", function () {
      function exampleA() {
        return exampleB(1)
      }
      function exampleB(arg1) {
        return arg1
      }
      expect(exampleA()).toEqual(1)
    })

    it('matters, the declaration order when they are anonymous', function () {
      var exampleA = function () {
        return exampleB(1)
      }

      var exampleB = function (arg1) {
        return arg1
      }
      expect(exampleA()).toEqual(1)
    })

    it('can use optional parameters', function () {
      function example(a, b, c) {
        if (c) {
          return a + b + c
        }
        return a + b
      }
      expect(example(1, 1, 1)).toBe(3)
      expect(example(1, 1)).toBe(2)
    })

    it('considers functions to be anonymous in case of assignment statement', function () {
      var x = function () {
        return 1
      }
      //expect(typeof(z)).toEqual('undefined');
      //expect(x()).toEqual();
    })

    it('can take functions as arguments', function () {
      function a(x) {
        return x() + 1
      }
      function b(x) {
        return x
      }
      function c() {
        return 3
      }

      var result = a(b(c))

      //expect(result).toBe();
    })

    it('can create closures with free variables', function () {
      function external() {
        var a = 1

        function internal() {
          return a + 1
        }
        return internal()
      }

      //expect(external()).toBe();
    })

    it('can create closures with several free variables', function () {
      function external() {
        var a = 1,
          b = 2

        function internal() {
          var c = 3
          return a + b + c
        }
      }

      //expect(external()).toBe(6);
    })

    it('defines a pure function when there are no free variables', function () {
      function external() {
        var a = 1,
          b = 2

        function internal(a, b) {
          var c = 1
          return a + b + c
        }
        return internal(4, 4)
      }

      //expect(external()).toBe();
    })

    it('may return arrays that contains closures and so on', function () {
      function example() {
        // write the missing code here
      }

      //expect(example()[0](1)[1]).toEqual(10);
      //expect(example()[0](2)[1]).toEqual(11);
      //expect(example()[0](3)[1]).toEqual(12);
    })

    it('passes primitive types as values (a copy) to functions', function () {
      function example(arg) {
        arg = 'test!'
      }

      var x = 1
      var y = 'example'
      var z = true

      example(x)
      //expect(x).toEqual();

      example(y)
      //expect(y).toEqual();

      example(z)
      //expect(z).toEqual();
    })

    it('passes arrays by reference', function () {
      function sum(sequenceOfNumbers) {
        sequenceOfNumbers[0] = 100
        return 4
      }

      var x = [1, 2, 3]

      //expect(x).toEqual();
    })

    it('passes objects by reference', function () {
      function example(arg) {
        arg.property = 'test'
      }

      var x = { property: 'cool!' }

      example(x)
      expect(x.property).toEqual('test')
    })

    it('may return a function as the result of invoking a function', function () {
      function add(a, b) {
        return a + b
      }
      function example() {
        return add
      }

      //expect(example()(1,2)).toEqual();
      var f = example()
      //expect(f(2,2)).toEqual();
    })

    it('can return closures as a function result', function () {
      function plus(amount) {
        return function (number) {
          return number + amount
        }
      }

      var f = plus(5)

      expect(f(3)).toBe(8)
    })

    it('can have functions that receive other functions as arguments', function () {
      function add(a, b) {
        return a + b
      }
      function example(arg) {
        return arg(2, 2) + 1
      }

      //expect(example(add)).toEqual();
    })

    it('may have functions as the input and the output', function () {
      function plus(originalFunction) {
        return function (arg1) {
          return originalFunction() + arg1
        }
      }

      var f = plus(function () {
        return 1
      })

      //expect(f(2)).toBe();
    })

    it("can invoke functions indirectly using the special 'call'", function () {
      function f(a, b) {
        return a + b
      }

      //expect(f.call(f,1,1)).toEqual();
    })

    it("can invoke functions indirectly using the special 'apply'", function () {
      function f(a, b) {
        return a + b
      }

      //expect(f.apply(f, [1,1])).toEqual();
    })

    it('is useful sometimes to change the context', function () {
      function F() {
        this.val = 100
        this.exec = function () {
          ++this.val
        }
      }
      function G() {
        this.val = 200
        this.exec = function () {
          ++this.val
        }
      }
      var f = new F()
      var g = new G()

      f.exec.call(g)
      //expect(f.val).toBe();
      //expect(g.val).toBe();
    })

    it('doesnt have a private scope inside blocks', function () {
      var j = 0
      for (var i = 0; i < 5; i++) {
        j += i
      }

      //expect(i).toEqual();
      //expect(j).toEqual();
    })
  })

  describe('has multiple ways to define and create objects', function () {
    it('can define object literals', function () {
      var obj = {
        name: 'bob',
        theName: function () {
          return this.name
        },
      }

      //expect(obj.theName()).toBe();
    })

    it('can create properties dynamically', function () {
      var obj = { name: 'bob', surname: 'sponge' }
      obj.address = 'palm tree'

      //expect(obj.address).toEqual();
      //expect(obj['address']).toEqual();
      //expect(obj['name']).toEqual();
    })

    it('can define properties also using brackets', function () {
      var obj = {}
      obj['name'] = 'bob'

      //expect(obj.name).toEqual();

      // this is interesting, it doesn't
      // complain about trailing brackets:

      obj[[['something']]] = 'wtf'
      // expect(obj.something).toEqual();
    })

    it('may define complex objects', function () {
      var user
      // write the contents of the obj to make the satisfy the expectations:

      //expect(user.address.street).toEqual('sesame');
      //expect(user.friends[0].name).toEqual('triki');
    })

    it('has a pattern called, the Module Pattern', function () {
      function createObject() {
        var points = 0

        return {
          addPoint: function () {
            ++points
          },
          score: function () {
            return points
          },
        }
      }

      var obj = createObject()
      obj.addPoint()
      //expect(obj.score()).toEqual();
      //expect(typeof(obj.points)).toEqual();
    })

    it('may create objects also with the module pattern', function () {
      function createObject(initialScore) {
        // write the code here
      }

      /*
      var obj = createObject(5, 'red');
      obj.incrementScoreIn(5);
      expect(obj.color).toEqual('red');
      expect(obj.points()).toEqual(10);
      */
    })

    it('can define constructors', function () {
      function Obj() {
        var name = 'bob'

        this.theName = function () {
          return name
        }
      }

      var obj = new Obj()
      //expect(obj.theName()).toBe();
    })

    it("may contain 'static' methods", function () {
      function Obj() {
        var name = 'bob'

        this.theName = function () {
          return name
        }
      }
      Obj.someStaticMethod = function () {
        return 22
      }

      //expect(Obj.someStaticMethod()).toBe();
    })

    it('can have have methods in the prototype', function () {
      function Obj() {
        var name = 'bob'
      }
      Obj.prototype.theName = function () {
        return this.name
      }

      var obj = new Obj()
      //expect(obj.theName()).toEqual();
      //expect(obj.theName).toBe(new Obj().theName);
    })

    it('can define a factory', function () {
      function obj() {
        var self = {}

        var name = 'bob'
        self.theName = function () {
          return name
        }

        return self
      }

      var instance = obj()
      //expect(instance.theName()).toBe();
      //expect(instance.theName).not.toBe(obj().theName);
    })

    it('can create methods dynamically on an object instance', function () {
      var obj = {}
      var methodNames = ['meow', 'jump']
      for (var i = 0; i < methodNames.length; i++) {
        obj[methodNames[i]] = function () {
          return 'it works'
        }
      }
      //expect(obj.meow()).toEqual();
    })

    describe('the polymorphism', function () {
      // check out this video for a great explanation on polymorphism:
      // https://www.youtube.com/watch?v=PMfcsYzj-9M

      it('may use constructor plus prototype', function () {
        function Parent() {
          this.name = 'parent'
        }
        Parent.prototype.someMethod = function () {
          return 10
        }

        function Child() {
          Parent.call(this) // constructor stealing
          this.name = 'child'
        }
        Child.prototype = Object.create(Parent.prototype) // prototype chaining

        var child = new Child()
        //expect(child.someMethod()).toEqual();
        //expect(child.name).toEqual();
      })

      it('may use the functional inheritance', function () {
        function parent() {
          var name = 'parent'
          var self = {}
          self.someMethod = function () {
            return 10
          }
          return self
        }

        function child() {
          var name = 'child'
          var self = parent()
          return self
        }

        var instance = child()
        //expect(instance.someMethod()).toBe();
      })

      // KOAN: how do you create "protected methods?"
    })
  })

  describe('commons patterns with functions and behaviors', function () {
    it('can invoke functions immediately to take advantage of scopes', function () {})
    it('hoists variables the way you probably dont expect', function () {
      function generate() {
        var i, x
        var functions = []
        for (i = 0; i < 5; i++) {
          var x = i // this is a copy
          functions.push(function () {
            return x
          })
        }
        return functions
      }
      expect(generate()[0]()).toEqual(4)
      expect(generate()[1]()).toEqual(4)
    })
  })

  context('has ways to simulate classes', function () {
    // "Class"
    function Cat() {
      this.kilos = 1
      this.feed = function () {
        this.kilos++
      }
      this.isPurring = function () {
        return true
      }
    }
    //////////////////////////////////////
    // "Class"
    function Lion(energy) {
      Cat.call(this)
      this.energy = energy || 100
      var self = this

      var run = function () {
        // private method
        self.energy -= 10
      }
      var attack = function () {
        // private method
        self.energy -= 5
      }
      this.playWithFriend = function (friend) {
        if (friend.isPurring()) self.energy += 10
      }
      this.hunt = function () {
        // public method
        run()
        attack()
        this.onHunting() // fire event
      }
      this.onHunting = function () {
        /* event */
      }
    }

    context('and the THIS keyword', function () {
      var cat

      beforeEach(function () {
        cat = new Cat()
        window.kilos = 0
      })

      it('sometimes works as expected in other languages', function () {
        cat.feed()
        cat.feed()

        //expect(cat.kilos).toEqual();
      })

      it('works different on dettached functions', function () {
        window.kilos = 10
        var feed = cat.feed

        feed()

        //expect(window.kilos).toEqual();
        //expect(cat.kilos).toEqual();
      })

      it('can be bound explicitly with CALL and APPLY', function () {
        var feed = cat.feed

        feed.apply(cat)

        //expect(cat.kilos).toEqual();
      })

      it('can be bound in modern browsers with BIND', function () {
        var feed = cat.feed
        var bound = feed.bind(cat)

        bound()

        //expect(cat.kilos).toEqual();
      })

      it('works different when function is attached to other object', function () {
        var otherCat = new Cat()
        otherCat.kilos = 10
        otherCat.feed = cat.feed

        otherCat.feed()
        //expect(otherCat.kilos).toEqual();
        //expect(cat.kilos).toEqual();
      })

      it('can be handled using the SELF trick', function () {
        var energy = 200
        var lion = new Lion(energy)

        lion.hunt()

        //expect(lion.energy).toEqual();
      })

      it('interprest the THIS when the function is executed', function () {
        var energy = 200
        var lion = new Lion()

        lion.hunt = function () {
          this.energy = 4000
        }
        lion.hunt()

        //expect(lion.energy).toEqual();
      })
    })

    describe('event driven development', function () {
      // "Class"
      function EventBus() {
        var subscribersInfo = []

        this.addSubscriber = function (callback) {
          var eventNames = [].slice.call(arguments).slice(1)
          subscribersInfo.push({
            subscriber: callback,
            eventNames: eventNames,
          })
        }

        this.emit = function (eventName, eventArgs) {
          for (var i = 0, len = subscribersInfo.length; i < len; i++) {
            var info = subscribersInfo[i]
            for (var j = 0, lenj = info.eventNames.length; j < lenj; j++) {
              if (info.eventNames[j] == eventName)
                info.subscriber(eventName, eventArgs)
            }
          }
        }
      }

      // PLEASE READ THIS POST. It contains the theory:
      // http://www.carlosble.com/2013/02/event-oriented-programming-with-javascript/

      it('uses the DOM level 0 traditional model (one2one)', function () {
        var lion = new Lion()
        var called = false
        // subscribes to the event:
        lion.onHunting = function () {
          called = true
        }

        lion.hunt()

        //expect(called).toBe();
      })

      it('implements the observer pattern (one2many)', function () {
        function Publisher() {
          this.addObserver = function (observerCallback) {
            // TODO: implement this
          }
          this.informAllObservers = function () {
            // TODO: implement this
          }
        }

        var publisher = new Publisher()
        var observer1WasCalled = false
        var observer1 = function () {
          observer1WasCalled = true
        }
        var observer2WasCalled = false
        var observer2 = function () {
          observer2WasCalled = true
        }
        publisher.addObserver(observer1)
        publisher.addObserver(observer2)

        publisher.informAllObservers()

        //expect(observer1WasCalled).toBeTruthy();
        //expect(observer2WasCalled).toBeTruthy();
      })

      it('implements the pub/sub pattern (many2many)', function () {
        var eventBus = new EventBus()
        var eventWasFired = false
        var handler = function (eventName, eventArgs) {
          eventWasFired = true
          //expect(eventArgs.someNumber).toBe(10);
        }
        eventBus.addSubscriber(handler, 'someEvent')

        eventBus.emit('someEvent', { someNumber: 10 })

        //expect(eventWasFired).toBeFalsy();
      })
    })
  })
})
