let alert = (...args) => console.log(...args);

// Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop in target && prop > 0) {
      return Reflect.get(...arguments);
    } else if (prop < 0) {
      return Reflect.get(target, target.length + +prop, receiver);
    }
  },
});
alert(array[1]); // 2
alert(array[-1]); // 3
alert(array[-2]); // 2

// вся остальная функциональность массивов должна остаться без изменений
