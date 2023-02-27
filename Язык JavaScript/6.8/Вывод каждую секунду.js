// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  let deploy = setInterval(() => {
    from <= to ? console.log('ci: ' + from++) : clearInterval(deploy);
  }, 1000);
}

printNumbers(5, 10);

function printNumbers2(from, to) {
  setTimeout(function repeat() {
    console.log('st: ' + from++ + '\n');
    if (from <= to) setTimeout(repeat, 1000);
  }, 1000);
}

printNumbers2(7, 12);
