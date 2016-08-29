// Arrays work pretty much the same as in Ruby, without some of the nice methods.

var teachers = ["Ian", "Sophie", "JJ", "Tony"];

var junkDrawer = [19, "String", null];


teachers.length // 4
teachers[0] // "Ian"
teachers.first // Nope

// JavaScript Objects can behave a lot like hashes.

var ian = {name: 'Ian', job: 'Teacher'};
ian['job'] // 'Ian'

// We can access properites using . notation
ian.job

// We can also store functions as values because functions are objects!!

var ian = {
  name: 'Ian',
  job: 'Teacher',
  sayHi: function(){
    console.log('Hello there');
  }
};
