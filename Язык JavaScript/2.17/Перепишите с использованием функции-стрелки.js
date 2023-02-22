function alert(...args) {
  console.log(...args);
}

// Перепишите с использованием функции-стрелки
let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  'Вы согласны?',
  () => alert('Вы согласились.'),
  () => alert('Вы отменили выполнение.')
);
