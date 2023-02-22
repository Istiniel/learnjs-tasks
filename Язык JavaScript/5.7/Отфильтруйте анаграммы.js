function alert(...args) {
  console.log(...args);
}

// Отфильтруйте анаграммы

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  let result = new Map();

  for (let evr of arr) {
    result.set(
      evr
        .toLowerCase()
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join(''),
      evr
    );

    console.log(evr + ' - ' + [...result.values()]);
  }
  return [...result.values()];
}

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
