/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Implicit Ojbect Binding: In the global scope, referring to "this" will reference the window/console object.
* 2.  Implicit Binding: When it is implied that "this" refers to the object before the period when it is called.
* 3.  New Binding: When an object is created by a constructor, "this" applies to that specific object.
* 4.  Explicit Binding: When "this" is explicitly defined to a call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

const myName = name => console.log(`My name is ${this}`);

myName('Kevin');

// Principle 2

const aboutMe = {
    name: 'Kevin',
    age: 31,
    sayHello: function(location) {
        console.log(`Hello, my name is ${this.name}, and I live in ${location}.`); 
    }
}

aboutMe.sayHello('Eau Claire')

// Principle 3

function Sibling(name, type) {
    this.name = name;
    this.type = type;
    this.declare = function() {
        console.log(`This is my ${type}, ${name}.`);
    } 
}

const morgan = new Sibling('Morgan', 'brother');
const tina = new Sibling('Christina', 'sister');

morgan.declare();
tina.declare();

// Principle 4

morgan.declare.call(tina);
tina.declare.apply(morgan);