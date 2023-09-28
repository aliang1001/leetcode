function createArray(n) {
  if (n === 1) {
    return [1];
  } else {
    const arr = createArray(n - 1);
    arr.push(n);
    return arr;
  }
}

const result = createArray(10);
console.log(result);
