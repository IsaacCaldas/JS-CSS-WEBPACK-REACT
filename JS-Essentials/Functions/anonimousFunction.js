const sum = function(x, y){
  return x + y;
}

const showTotal = function(a, b, operation = sum){
  console.log(operation(a, b));
}

showTotal(2, 3);
showTotal(2, 3, sum);
showTotal(2, 3, function(x, y){
  return x - y; 
});
showTotal(3, 7, (x, y) => {
  return x * y;
})

const people = {
  say: function(){
    console.log('Hello World!');
  }
} // OR --- new sintax
/* const people = {
  say(){
    console.log('Hello World!');
  }
} */
people.say();