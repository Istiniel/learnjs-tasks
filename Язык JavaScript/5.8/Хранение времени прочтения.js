function alert(...args) {
  console.log(...args);
}

// Хранение времени прочтения

messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let timeOfReadCash = new WeakMap();

function readLastMessage1(messages) {
  console.log(messages[messages.length - 1]);
  timeOfReadCash.set(messages[messages.length - 1], new Date()); // Добавляем прочитанное сообщение и время прочтения в WeakMap
}

function deleteReadMessage1(messages) {
  if (messagesCash.has(messages[messages.length - 1])) {
    // Если в WeakMap присутствует ссылка на сообщение из messages, тогда удаляем данное сообщение из исходного массива
    messages.pop();
  }
}

// Прочесть последнее непрочитанное сообщение
readLastMessage1(messages);

// Узнать время прочтения сообщения
console.log(
  timeOfReadCash.get(messages[messages.length - 1]).toLocaleDateString('ru-RU')
);

// Удалить последнее сообщение из messages
deleteReadMessage1(messages);
