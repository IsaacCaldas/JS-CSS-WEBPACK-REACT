// let & const & var
{
  var a = 2; // global scope
  let b = 3; // block scope
  const c = 4; // block scope
  console.log(b); 
  console.log(c);
}
console.log(a);
//console.log(b); // err
//console.log(c); // err

// Template String
const product = 'iPad';
console.log(`${product} é caro.
Hello world`);

// Destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);
console.log(l, e, ...tras);

const [x, ,y] = [1,2,3];
console.log(x,y);

const { age, name } = { name: 'Isaac', age: 18};
console.log(a, name);

