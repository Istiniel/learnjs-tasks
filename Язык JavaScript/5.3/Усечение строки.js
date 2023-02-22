function alert(...args) {
  console.log(...args);
}

// Усечение строки

function truncate(str, maxlength) {
  let result = str;
  if (str.length > maxlength) {
    result = str.slice(0, maxlength) + '...';
  }
  return result;
}

console.log(truncate('stringSTRINGstring', 7));
