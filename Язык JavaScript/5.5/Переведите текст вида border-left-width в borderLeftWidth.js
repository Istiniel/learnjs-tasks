function alert(...args) {
  console.log(...args);
}

// Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  return str
    .split('-')
    .filter((e) => e.length > 0)
    .map((e, ind) => {
      if (ind === 0) {
        return e;
      } else {
        return e.slice(0, 1).toUpperCase() + e.slice(1);
      }
    })
    .join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
