// Подмассив наибольшей суммы
function alert(...args) {
  console.log(...args);
}

function getMaxSubSum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr.slice(i, i + 1)[0];
    result.push(firstNum);
    let restNums = [...arr.slice(i + 1)];
    for (let i = 0; i < restNums.length; i++) {
      result.push(restNums[i]);
      result.push(
        firstNum + restNums.slice(0, i + 1).reduce((acc, e) => acc + e, 0)
      );
    }
  }
  return Math.max(...result);
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
