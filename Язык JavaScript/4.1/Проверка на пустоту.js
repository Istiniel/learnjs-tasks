function alert(...args) {
  console.log(...args);
}

// Проверка на пустоту
function isEmpty(obj) {
  return Object.keys(schedule).length < 1 ? true : false;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

alert(isEmpty(schedule)); // false

isEmpty(schedule);
