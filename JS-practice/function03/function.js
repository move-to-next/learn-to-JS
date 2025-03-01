function multiply(a, b) {
  return a * b;
}

function square(x) {
  return multiply(x, x);
}

function calculateArea(width, height) {
  return multiply(width, height);
}

function calculateVolume(width, height, depth) {
  const area = calculateArea(width, height);
  return multiply(area, depth);
}

console.log(calculateVolume(3, 4, 5)); // 60?

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(square);
console.log(squared); // [1, 4, 9, 16, 25];