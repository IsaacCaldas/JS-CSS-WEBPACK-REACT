Array.prototype.filter2 = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}

const products = [
  {name: 'Notebook', price: 2699, fragile: true},
  {name: 'Iphone X', price: 3299, fragile: true},
  {name: 'Dices', price: 3, fragile: false},
  {name: 'Pen', price: 1, fragile: false},
  {name: 'Cup', price: 5, fragile: true},
]

const price = products => {
  return products.price > 500;
}
const fragile = products => {
  return products.fragile;
}
console.log(products.filter2(price).filter2(fragile));