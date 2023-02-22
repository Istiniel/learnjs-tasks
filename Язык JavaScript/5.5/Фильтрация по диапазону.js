function alert(...args) {
  console.log(...args);
}

// Фильтрация по диапазону
let arr = [5, 3, 8, 1];

function filterRange(arr, min, max) {
  return arr.filter((e) => e >= min && e <= max);
}

let filtered = filterRange(arr, 1, 4);

alert(filtered);
alert(arr); // 5, 3, 8, 1
