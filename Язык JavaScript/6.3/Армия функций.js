// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
// Номера одинаковые потому что в массив в первоначальном коде помещается одна и та же переменная i, которая обновляется
// с каждой итерацией while

function makeArmy() {
  let shooters = [];

  // let i = 0;
  let i = 0;
  while (i < 10) {
    let shooter = function () {
      let currentIndex = i;
      return function () {
        console.log(currentIndex); // должна выводить порядковый номер
      };
    };
    shooters.push(shooter());
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
