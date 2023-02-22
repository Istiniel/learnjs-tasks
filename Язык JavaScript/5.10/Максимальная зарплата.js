function alert(...args) {
  console.log(...args);
}

// Максимальная зарплата

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  // if ( ) return  null;

  let max = 0;

  for (let evr of Object.entries(salaries)) {
    let [worker, salary] = evr;
    salary > max && (max = salary);
  }

  return max;
}

console.log(topSalary(salaries));
