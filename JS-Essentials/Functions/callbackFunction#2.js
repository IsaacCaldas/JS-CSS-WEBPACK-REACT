const nums = [0, 6, 5, 4, 6, 2, 10];

// Without callback
let numsSmallerThenFive1 = [];
for (let i in nums){
  if (nums[i] < 5){
    numsSmallerThenFive1.push(nums[i]);
  }
}

console.log(numsSmallerThenFive1);

// With callback
numsSmallerThenFive2 = nums.filter(function(nums) {
  return nums < 5;
});
console.log(numsSmallerThenFive2);

// With callback & arrowFunction

numsSmallerThenFive3 = nums.filter(nums => nums < 5);
console.log(numsSmallerThenFive3);

// with function 
const numsSmaller = num => num < 5;
numsSmallerThenFive4 = nums.filter(numsSmaller);
console.log(numsSmallerThenFive4);
