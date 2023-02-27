function sum(a) {
  let summ = !isNaN(+a) ? a : 0;

  function carriedSum(current) {
    if (isNaN(+current)) return carriedSum;
    summ += current;
    return carriedSum;
  }

  carriedSum.valueOf = () => summ;

  return carriedSum;
}

console.log(+sum(0)(5)()(1)(7)(10)); // 23
console.log(sum(0)(5)()(1) == 6); // true
