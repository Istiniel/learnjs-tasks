let alert = (...args) => console.log(...args);

// Что выведет функция?

function f() {
  alert(this); // globalTHis (window в браузере), т.к. указан null в user.g
}

let user = {
  g: f.bind(null),
};

user.g();
