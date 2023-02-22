function alert(...args) {
  console.log(...args);
}

// Трансформировать в объекты

let vasya1 = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya1 = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha1 = { name: 'Маша', surname: 'Петрова', id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped = users1.map((e) => {
  return { fullName: `${e.name} ${e.surname}`, id: e.id };
});

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert(usersMapped[0]);
