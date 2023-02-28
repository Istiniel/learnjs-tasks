let alert = (...args) => console.log(...args);

// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true

// т.к. Прототипы конструкторов A и B заменены на пустые объекты, то объект a ищет поле constructor выше по цепочке наследования, а именно в Object

console.log(a.constructor); // Object
