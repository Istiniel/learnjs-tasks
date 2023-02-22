function alert(...args) {
  console.log(...args);
}

// Фильтрация по диапазону "на месте"

let arr1 = [5, 3, 8, 1];

function filterRangeInPlace(arr1, min, max) {
  let filteredArr = filterRange(...arguments);
  for (let i = 0; i < arr1.length; i++) {
    if (!filteredArr.includes(arr1[i])) {
      arr1.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr1, 1, 4);

alert(arr1); // [3, 1]
