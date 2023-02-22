function alert(...args) {
  console.log(...args);
}

// Можно ли добавить свойство строке?

let str = 'Привет';

str.test = 5;

alert(str.test);

// Нельзя, str примитив, попытка присвоить ключи примитиву в strict mode вызовет ошибку
