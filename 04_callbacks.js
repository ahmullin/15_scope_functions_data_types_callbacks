// Because functions are objects, you can pass them into other functions to be called later. This is called a 'callback'

function sayHelloAndDoSomething(callback){
  console.log('Hello');
  callback();
}

// You can pass in named or anonymous functions

function sayHi () {
  console.log('Hi');
}

sayHelloAndDoSomething(sayHi);
sayHelloAndDoSomething(function(){
  console.log("Anonymous function");
});

// Let's take a look at the `forEach` method

var names = ['Ian', 'Sophie', 'JJ', 'Tony'];

names.forEach(function(name){
  console.log(name);
});

function myForEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
}

// CHALLENGE: Build out your own Map Method
