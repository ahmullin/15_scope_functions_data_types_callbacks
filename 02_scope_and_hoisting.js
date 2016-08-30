// Write a function that takes in a number and returns the double of it's value

function doubleTheFun (num) {
   console.log(num * 2);
}

var double = doubleTheFun(200);
console.log(double);

// Functions must have explicit return values

function noDoubleTheFun (num) {
  num * 2;
}

console.log(noDoubleTheFun(200));

// Functions inherit the scope in which they're defined...

var name = 'Jake';

function saySomething(){
  console.log(name);
  console.log(doubleTheFun(500));
}

saySomething();

var bornToBeWild = 'Grizzly Bear';

function village (){
  var bornInCaptivity = 'Shamu';
  console.log(bornToBeWild);
}

console.log(bornInCaptivity);
console.log(bornToBeWild);

function outside () {
  var name = 'Jasper';

  function inside () {
    var age = 24;
    console.log(age);
  }

  inside();
  console.log(age);
}

outside();



// variable declarations are hoisted to the top of the current scope, but not their assignment

var person = 'Mary';

function sayName(){
  console.log(person);
  var person = 'Tami';
}

function sayNameWithArgument(person){
  console.log(person);
}

sayNameWithArgument('Colby'); // Colby
sayNameWithArgument(person); // Mary
sayName();

noNewPerson();

function noNewPerson () {
  console.log(person); // Mary
  person = 'Tami';
  console.log(person); // Tami
}

noNewPerson();
console.log(person);



// Javascript functions are objects. This means we can store them in a variable. This is called a function expression


// Function declarations are hoisted, while expressions aren't

var myFunkyFunction = function () {
  console.log('Funky');
};



// We can create a function that returns another function...


function makeAGreeter (name) {
  var greeting = 'Hello ' + name;

  return function (additionalGreeting) {
    console.log(greeting + additionalGreeting);
  };
}

var something = makeAGreeter('Jasper');
