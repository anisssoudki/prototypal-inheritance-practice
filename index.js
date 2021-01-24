// prototypal inheritance example

let john = {
    name: 'john',
    yearOfBirth: 1998,
    job: 'teacher'
};

console.log(john)

const Person = function(name, yearOfBirth, job) {
  
this.name = name;
this.yearOfBirth = yearOfBirth;
this.job = job;
this.calculateAge = function() {
    console.log(2021 - this.yearOfBirth)
}
    
}
// all person instances will inherit the last name property
Person.prototype.lastName = 'smith'

let sam = new Person('sam', 1990, 'teacher')
console.log(sam)

console.log(sam.lastName)

var personProto = {
    calculateAge: function() {
    console.log(2016-this.yearOfBirth);
    }
    }
//     undefined
    var john = Object.create(personProto); 
//     undefined
    john.name = 'john'
//     "john"
    john.yearOfBirth = 1990;
//     1990
    john.job = 'teacher'
//     "teacher"
//     john
//     {name: "john", yearOfBirth: 1990, job: "teacher"}
var jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
})
//object.create and new are the most used ways to create obects
