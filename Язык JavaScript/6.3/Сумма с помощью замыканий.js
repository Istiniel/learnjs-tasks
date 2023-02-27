function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(-5)(3));

let sum2 = (a) => (b) => a + b;

console.log(sum2(2)(3));
