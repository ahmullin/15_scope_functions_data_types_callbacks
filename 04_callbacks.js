// Because functions are objects, you can pass them into other functions to be called later. This is called a 'callback'

function sayHelloAndDoSomething(callback){
  console.log('Hello');
  callback();
}

// You can pass in named or anonymous functions

// Let's take a look at the `forEach` method

// CHALLENGE: Build out your own Map Method
