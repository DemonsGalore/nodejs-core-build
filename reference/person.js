/* const person = {
  name: 'Andreas Stopat',
  age: '33',
}; */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and i am ${this.age}.`);
    
  }
}

module.exports = Person;