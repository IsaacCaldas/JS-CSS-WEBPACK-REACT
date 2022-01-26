// operator ... rest(juntar)/spread(espalhar)
// use rest with param of function
// rest operator (...)
function total(...nums){
  let total = 0;
  nums.forEach(n => total += n);
  return total
}
console.log(total(2,3,4,5));

// use spread with object
const employee = {
  name: 'Maria',
  wage: 5300.00
}
const clone = {
  active: true,
  ...employee
}
console.log(clone);

// use spread with array
const gA = ['John', 'Peter', 'Anna'];
const gFinal = ['Mary',  ...gA, 'Rafis'];
const gFinal2 = ['Mary', 'Rafis', ...gA,];
console.log(gFinal, gFinal2);