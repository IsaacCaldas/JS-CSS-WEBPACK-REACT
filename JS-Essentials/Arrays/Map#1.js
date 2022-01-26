const nums = [1, 2, 3, 4, 5];

// map is For with purpose
let result = nums.map(num => num * 3)

// console.log(result, nums);
console.log(result);

const sum10 = e => e + 10;
const triple = e => e * 3;
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

result = nums.map(sum10).map(triple).map(forMoney);
result2 = nums.map(sum10).map(forMoney);
result3 = nums.map(triple).map(sum10).map(forMoney);
console.log(result, result2, result3);