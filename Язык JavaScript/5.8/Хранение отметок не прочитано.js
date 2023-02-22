function alert(...args) {
  console.log(...args);
}

// Хранение отметок "не прочитано"

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];
let messagesCash = new WeakSet();

// read last message
function readLastMessage(messages) {
  console.log(messages[messages.length - 1]);
  messagesCash.add(messages[messages.length - 1]); // Добавляем прочитанное сообщение в WeakSet
}

function deleteReadMessage(messages) {
  if (messagesCash.has(messages[messages.length - 1])) {
    // Если в WeakSet присутствует ссылка на сообщение из messages, тогда удаляем данное сообщение из исходного массива
    messages.pop();
  }
}

readLastMessage(messages); // прочтем последнее полученное сообщение
deleteReadMessage(messages); // удаляем сообщение из messages,  информация в WeakSet обновится автоматически, т.к. ссылка к последнему сообщению станет недоступна

console.log(messages);
