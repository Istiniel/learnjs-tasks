let alert = (...args) => console.log(...args);

// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

// Вот как это должно работать:

function makeObservable(target) {
  target.handlers = [];

  target.observe = function (handler) {
    target.handlers.push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      target[prop] = value;

      for (let evr of target.handlers) {
        evr(prop, value);
      }

      return true;
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = 'John'; // выводит: SET name=John

// Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.

// При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.

// P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.
