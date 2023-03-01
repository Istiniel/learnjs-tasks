let alert = (...args) => console.log(...args);

// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(alert);

// ошибка не будет обработана, т.к. не вызывается метод reject внутри SetTimeout, SetTimeout в свою очередь является макрозадачей поэтому ошибка выбрасывается после выполнения основных задач в callstack
