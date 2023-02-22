function alert(...args) {
  console.log(...args);
}

//Функция pow(x,n)
let pow = (x, n) => x ** n;

let x = +prompt('Enter x', '');
let n = +prompt('Enter n', '');

if (n >= 1) {
  alert(pow(x, n));
} else {
  alert('n < 1');
}
