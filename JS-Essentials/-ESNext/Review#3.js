// ES8: Object.values/Object.entries
const obj = {
  a: 1,
  b: 2,
  c: 3
}
console.log(Object.entries(obj));
console.log(Object.values(obj));
console.log(Object.keys(obj));

// Improvemenst in literal notation
const name = 'John';
const people = {
  name,
  hello(){
    return 'Hello World!';
  }
}
console.log(people.name, people.hello());

// Class
class Animal {}
class Dog extends Animal {
  hello(){
    return 'Au au!'
  }
}

console.log(new Dog().hello());