function alert(...args) {
  console.log(...args);
}

// Форматирование относительной даты

function formatDate(date) {
  let seconds = Math.round((new Date() - date) / 1000);
  let result;
  seconds < 1
    ? (result = 'прямо сейчас')
    : seconds < 60
    ? (result = `${Math.round(seconds)} сек. назад`)
    : seconds <= 60 * 60
    ? (result = `${Math.round(seconds / 60)} мин. назад`)
    : (result = `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString(
        'ru-RU',
        { hour: '2-digit', minute: '2-digit' }
      )}`);
  return result;
}
alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 60 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
