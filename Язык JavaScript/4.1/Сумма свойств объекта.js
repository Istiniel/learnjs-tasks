function alert(...args) {
  console.log(...args);
}

// Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function salariesSum(salaries) {
  return Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
}

console.log(salariesSum(salaries));
