function alert(...args) {
  console.log(...args);
}

// Какой день месяца был много дней назад?
let date3 = new Date(2015, 0, 2);

function getDateAgo(date, count) {
  return new Date(+date - count * 24 * 3600 * 1000).getDate();
}

alert('day ago: ' + getDateAgo(date3, 1)); // 1, (1 Jan 2015)
alert('day ago: ' + getDateAgo(date3, 2)); // 31, (31 Dec 2014)
alert('day ago: ' + getDateAgo(date3, 365)); // 2, (2 Jan 2014)
