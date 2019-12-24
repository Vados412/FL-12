var a = parseInt(prompt("Input A:"));
var b = parseInt(prompt("Input B:"));
var c = parseInt(prompt("Input C:"));
if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
  alert("input values should be ONLY numbers");
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert("A triangle must have 3 sides with a positive definite length");
} else if (a + b <= c || a + c <= b || b + c <= a) {
  alert("Triangle doesn’t exist");
} else if (a != b && a != c && b != c) {
  console.log("Scalene triangle");
} else if (a == b && b == c) {
  console.log("Equilateral triangle");
} else {
  console.log("Isosceles triangle");
}
