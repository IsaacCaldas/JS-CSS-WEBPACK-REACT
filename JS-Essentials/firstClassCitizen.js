// literal form
function fun1(){}

// Storage in a variable
const fun2 = function(){} // anonimous function

// Storage in array
const array = [
  function(a, b) {return a + b },
  fun1,
  fun2,
  "Test"
]
//console.log(array[0](2,8));

// Storage in object atribute
const obj = {}
obj.say = function(){ return 'Hello World! '};
//console.log(obj.say());

// Pass a function like param
function run(fun){
  fun()
}
//run(function() {console.log("Running")})

// Function can return/contain a other function
function sum(a, b){
  return function(c){
    //console.log(a + b + c);
  }
}
sum(2, 3)(5); 
// other way
const five = sum(2, 3);
five(7)