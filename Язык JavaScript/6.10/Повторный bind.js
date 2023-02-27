let alert = (...args) => console.log(...args);

// Можем ли мы изменить this дополнительным связыванием?
// Нет, this можно "привязать" через bind лишь 1 раз

// Что выведет этот код?
// Вася

function f() {
  alert(this.name);
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' });

f();
