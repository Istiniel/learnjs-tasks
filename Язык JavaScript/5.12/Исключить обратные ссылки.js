function alert(...args) {
  console.log(...args);
}

// Исключить обратные ссылки,
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
let room = {
  number: 23,
};

let meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(
    meetup,
    function replacer(key, value) {
      // value == meetup && key !== '' - поскольку первая пара "ключ:значение" в replacer это "":meetup, мы должны исключить её, иначе replacer сразу вернёт undefined
      return value == meetup && key !== '' ? undefined : value;
    },
    '...'
  )
);
