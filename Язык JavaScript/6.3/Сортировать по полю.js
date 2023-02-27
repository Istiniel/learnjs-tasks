// У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}

users.sort(byField('name'));
console.log(JSON.stringify(users));
users.sort(byField('age'));
console.log(JSON.stringify(users));
