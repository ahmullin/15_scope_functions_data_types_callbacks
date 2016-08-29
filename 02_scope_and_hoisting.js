// Functions must have explicit return values

function doubleNumber( num ) {
  return num * 2;
}

console.log( doubleNumber(2) );

// Functions inherit the scope in which they're defined...

var city = "Los Angelas";

function showCity(){
  console.log(city);
}

showCity();


// variable declarations are hoisted to the top of the current scope, but not their assignment

function showBetterCity(){
    console.log(city);
    var city = "New York";
}

showBetterCity();


// Functions can be defined inside of other functions and inherit their scope
var a = 6;

function first() {
    var a = 7;
    function second() {
        var a = 8;
        console.log(a);
    }
    second();
    console.log(a);
}

first(); // 8 first, then 7
console.log(a); // 6

// Javascript functions are objects. This means we can store them in a variable. This is called a function expression

var sayName = function () {
  console.log("Name");
};

// Function declarations are hoisted, while expressions aren't

sayHello(); // will execute
function sayHello(){
  console.log('Hello there');
}

sayHi();
var sayHi = function () {
  console.log('Hi');
};
