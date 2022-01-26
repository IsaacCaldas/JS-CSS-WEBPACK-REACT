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

const result = marketCar.map(toObj).map(onlyPrice);

console.log(result);