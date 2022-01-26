// Arrow function
const sum = (a,b) => a + b;
console.log(sum(1,3));

// Arro function (this)
const lexicon1 = () => console.log(this === exports);
const lexicon2 = lexicon1.bind({})
lexicon1();
lexicon2();

// default param
function log(text = 'Node'){
  console.log(text);
}
log();
log(undefined);
log(null);
log('Hello World!');

// rest operator (...)
function total(...nums){
  let total = 0;
  nums.forEach(n => total += n);
  return total
}
console.log(total(2,3,4,5));