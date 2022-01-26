// created my own map
Array.prototype.map2 = function(callback){
  const newArray = [];
  for (let i = 0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))
  }
  return newArray;
}

const marketCar = [
  '{"name": "Cookie", "price": 1.05}',
  '{"name": "Soda", "price": 1.30}',
  '{"name": "Pen", "price": 0.25}',
  '{"name": "Ink", "price": 1.0}',
  '{"name": "Cellphone", "price": 200.00}'
]

// Return one array only with prices

const toObj = json => JSON.parse(json);
const onlyPrice = product => product.price;

const result = marketCar.map2(toObj).map2(onlyPrice);

console.log(result);