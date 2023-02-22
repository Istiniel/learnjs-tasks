function alert(...args) {
  console.log(...args);
}

// Сумма свойств объекта

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((acc, el) => acc + el, 0);
}

alert(sumSalaries(salaries)); // 650
