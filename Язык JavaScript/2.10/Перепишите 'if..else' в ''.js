// Перепишите 'if..else' в '?'
let message;
let login;

login == 'Сотрудник'
  ? (message = 'Привет')
  : login == 'Директор'
  ? (message = 'Здравствуйте')
  : login == ''
  ? (message = 'Нет логина')
  : '';
