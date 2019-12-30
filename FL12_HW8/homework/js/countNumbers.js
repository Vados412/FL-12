function mknumber(stroka) {
  let numbers = "";
  for (let symbols of stroka) {
    numbers += !isNaN(symbols) ? symbols : "";
  }
  return numbers;
}
function cntnumbers(stro4ka) {
  let numbers1 = mknumber(stro4ka);
  let count = {};
  let str = numbers1.split("");
  str.forEach(s => (count[s] = count[s] + 1 || 1));
  return count;
}
cntnumbers("84756yn984w75ynf0w374f903yfm");
