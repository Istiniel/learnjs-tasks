let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // ошибка, функции sayHi() нет в глобальном лексическом окружении
