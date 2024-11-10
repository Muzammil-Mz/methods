// The filter() method returns a new array
// with all elements that pass the test
// defined by the given function.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.filter((x) => x >= 5));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0) return true;
  else return false;
}