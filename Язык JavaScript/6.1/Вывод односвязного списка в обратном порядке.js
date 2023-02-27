let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// 1 цикл

function printList(list) {
  let arr = [];
  let current = list;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  arr.reverse().map((el) => console.log(el));
}

printList(list);

console.log('\n');

// 2 рекурсия

function printList2(list) {
  if (list.next) {
    printList2(list.next);
  }

  console.log(list.value);
}

printList2(list);
