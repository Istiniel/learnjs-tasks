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
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

printList(list);
console.log('\n');

// 2 рекурсия

function printList2(list) {
  console.log(list.value);
  if (list.next) {
    printList2(list.next);
  }
}

printList2(list);
