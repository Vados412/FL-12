function addOne(x) {
  return x + 1;
}
function pipe(a, ...args) {
  let rezult = a;
  for (let functions of args){
      rezult = functions(rezult);
  }
  return rezult;
}
addOne(1);
pipe(1, addOne, addOne, addOne);