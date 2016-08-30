// Arrays work pretty much the same as in Ruby, without some of the nice methods.

var teachers = ["Ian", "JJ", "Sophie", "Tony"];

for (var i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
}
var firstTeacher = teachers[0];
// var firstTeacher = teachers.first; Doesn't work
var length = teachers.length;

console.log(firstTeacher);
console.log(length);

// JavaScript Objects can behave a lot like hashes.


var teacher = {
  name: 'Tony',
  hometown: 'LA',
  sayHello: function(){
    console.log('Hello, my name is ' + this.name);
  }
};


var name = teacher['name'];
console.log(name);

var hometown = teacher.hometown;
console.log(hometown);

teacher.sayHello();

// We can access properites using . notation

// We can also store functions as values because functions are objects!!
