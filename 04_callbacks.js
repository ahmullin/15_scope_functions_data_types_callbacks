// Because functions are objects, you can pass them into other functions to be called later. This is called a 'callback'


var raiseError = function () {
  console.log('Error!');
};

var raiseNameError = function () {
  console.log('Name must be greater than three characters');
};

function sayHello(name, callback ){
  if (name.length <= 3 ) {
    return callback();
  } else {
    console.log('Hello ' + name);
  }
}

sayHello('Ian', raiseError);
sayHello('Ian', raiseNameError);
// Hello, Ian, how are you?



function sayHelloAndDoSomething(something){
  alert('Hello');
  something();
}

sayHelloAndDoSomething(raiseNameError);

// 1. Define a function that takes in two arguments, a name and another function
// 2. Print out the persons name to the console and then execute the code from the second function

function doSomething(){
  console.log('Doing some stuff...');
}

function myFunctionThatTakesACallback (name, callback) {
  console.log('In the first function');
  console.log(name);
  console.log('Calling the callback!');
  callback();
  console.log('All done!!!!');
}

myFunctionThatTakesACallback('Gentian', doSomething);

// You can pass in named or anonymous functions

// Let's take a look at the `forEach` method

var teachers = ["Ian", "Sophie", "JJ"];

teachers.forEach( function (teacher){
  console.log(teacher);
});

// CHALLENGE: Build out your own Map Method
