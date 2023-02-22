function alert(...args) {
  console.log(...args);
}

// Использование "this" в литерале объекта

// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // this ссылается на global объект, т.к. отсутствует конкретный контекст при вызове функции (не метода)
