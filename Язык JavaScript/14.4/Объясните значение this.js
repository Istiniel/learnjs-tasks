let alert = (...args) => console.log(...args);

// представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function () {
    alert(this);
  },
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3)  т.к. в первых скобках указано полноценное выражение js, то метод go теряет первоначальный контекст, в итоге method = function (){ alert(this) }, вызов method ссылается на globalThis объект

(obj.go || obj.stop)(); // (4) т.к. в первых скобках указано полноценное выражение js, то метод go теряет первоначальный контекст, в итоге остаётся function (){ alert(this) }, вызов method ссылается на globalThis объект (без use strict)
