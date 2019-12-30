function getMin(...args) {
  let min;
  for (let arg of args) {
    min = min < arg ? min : arg;
  }
}
getMin(2, 5, 7, 8, 11);
