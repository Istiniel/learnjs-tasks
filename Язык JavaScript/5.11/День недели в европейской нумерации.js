function alert(...args) {
  console.log(...args);
}

// День недели в европейской нумерации
let date2 = new Date(2012, 0, 3); // 3 января 2012 года

function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

alert(getLocalDay(date2)); // вторник, нужно показать 2
