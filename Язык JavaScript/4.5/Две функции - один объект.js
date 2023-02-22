function alert(...args) {
  console.log(...args);
}

//  Две функции - один объект

// 1. Возможно ли создать функции A и B, чтобы new A() == new B()?
const randomObject = {
  name: 'randomName',
  surName: 'randomSurName',
};

function A() {
  return randomObject;
}
function B() {
  return randomObject;
}

let a = new A();
let b = new B();

alert(a == b); // true

// Ответ, теоретические возможно если явно возвращать один и тот же созданный ранее объект (randomObject), но на практике внутри конструкторов return не используется
