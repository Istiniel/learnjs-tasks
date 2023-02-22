function alert(...args) {
  console.log(...args);
}

// Оставить уникальные элементы массива

let strings = [
  'кришна',
  'кришна',
  'random',
  'random',
  'random',
  'random',
  'кришна',
  'кришна',
  ':-O',
];

function unique(arr) {
  return arr.filter((e, ind, arr) => arr.indexOf(e) === ind);
}

alert(unique(strings));

function onlyUnique(arr) {
  arr = arr.reduce((acc, el) => {
    return {
      ...acc,
      [el]: acc[el] !== undefined ? (acc[el] = acc[el] + 1) : 1,
    };
  }, {});

  let result = [];

  for (let evr in arr) {
    if (arr[evr] === 1) {
      result.push(evr);
    }
  }
  return result;
}

alert(onlyUnique(strings));
