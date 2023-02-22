function alert(...args) {
  console.log(...args);
}

// Покажите день недели

function getWeekDay(date) {
  let daysOfWeek = {
    0: 'ВС',
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
  };
  return daysOfWeek[date.getDay()];
}

let date1 = new Date(2012, 0, 3); // 3 января 2012 года
alert(getWeekDay(date1)); // нужно вывести "ВТ"
