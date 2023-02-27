let alert = (...args) => console.log(...args);

// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Вася',
});

alert(bound.test); // что выведет? почему?
// bind возвращает новую функцию, которая не сохранят личные поля прежней функции, поэтому аттрибута test у bound не будет, выведется undefined
