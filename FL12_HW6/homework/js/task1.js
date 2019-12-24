let a = parseFloat(prompt('Input Number A:', 0));
let b = parseFloat(prompt('Input Number B:', 0));
let c = parseFloat(prompt('Input Number C:', 0));
const two = 2;
const four = 4;
const sotka = 100;
let d = b * b - four * a * c;
if (isNaN(a) === true || isNaN(b) === true || isNaN(c) === true || a === 0) {
  alert('Invalid input data');
} else if (a === 0 && b === 0 && c === 0) {
  console.log('x=0');
} else if (a !== 0 && d > 0) {
  let x1 = Math.round((-b + Math.sqrt(d)) / (two * a) * sotka) / sotka;
  let x2 = Math.round((-b - Math.sqrt(d)) / (two * a) * sotka) / sotka;
  console.log('x1=', x1, 'and x2=', x2);
} else if (a !== 0 && d === 0) {
  console.log('x=' + Math.round(-b / two * a * sotka) / sotka);
} else {
  alert('no solution');
}
