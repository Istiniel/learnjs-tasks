function alert(...args) {
  console.log(...args);
}

// Скопировать и отсортировать массив

let arr3 = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  return [...arr].sort((a, b) => a.localeCompare(b));
}

let sorted = copySorted(arr3);

alert(sorted); // CSS, HTML, JavaScript
alert(arr3); // HTML, JavaScript, CSS (без изменений)
