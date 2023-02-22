function alert(...args) {
  console.log(...args);
}

// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let now = new Date();
  let secondsToday =
    (new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now) /
    1000;

  return Math.round(secondsToday);
}

console.log(getSecondsToTomorrow());
