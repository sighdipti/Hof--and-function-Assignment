let originalNumber = [2, 5, 8, 10, 3];

originalNumber.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log("Doubled Number:", originalNumber);