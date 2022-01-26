//Params or returns are optionals

function area(width, height){
  const area = width * height;
  if(area > 20){
    console.log(`Value above the allowed: ${area}m².`);
  } else {
    return area;
  }
}

console.log(area(2,5));
console.log(area(2));
console.log(area());
console.log(area(2,2,3,0,9));
console.log(area(5,5));