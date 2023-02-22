function alert(...args) {
  console.log(...args);
}

// Сколько сегодня прошло секунд?
function getSecondsToday() {
  let now = new Date();
  let secondsToday =
    (now - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 1000;

  return Math.round(secondsToday);
}

console.log(getSecondsToday());
