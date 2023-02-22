function alert(...args) {
  console.log(...args);
}

// Последнее число месяца?
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1));
