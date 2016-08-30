//1. Build your own for each method to make the following code work...


var people = ["JJ", "Daniella", "Khaleda"];

myForEach(people, function(person){
  console.log(person);
});

// JJ
// Daniella
// Khaleda

// 2. Build out your own map method that returns a new array of the return values of each loop through the callback function

myMap(people, function(person){
  return "Hello " + person;
}); // ["Hello JJ", "Hello Daniella", "Hello Khaleda"]
