//Проверка логина
let login = prompt(`Who's there?`, '');
let password;

if (login === null || login === 'null') {
  alert('Отменено');
} else if (login !== 'Админ') {
  alert('Я вас не знаю');
} else {
  password = prompt('Пароль?', '');
}

if (password === null || password === '') {
  alert('Отменено');
} else if (password !== 'Админ') {
  alert('Неверный пароль');
} else if (password === 'Я главный') {
  alert('Здравствуйте!');
}
