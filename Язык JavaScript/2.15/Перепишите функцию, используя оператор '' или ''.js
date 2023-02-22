function alert(...args) {
  console.log(...args);
}

// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}
