function alert(...args) {
  console.log(...args);
}

// Сортировать в порядке по убыванию

let arr2 = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr2.sort((a, b) => b - a);

alert(arr2); // 8, 5, 2, 1, -10
