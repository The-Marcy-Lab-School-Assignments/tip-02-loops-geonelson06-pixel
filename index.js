// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  let total = 0
  

  for (let i = 1; i < n; i++)
    let sqr = i * i;
    console.log(sqr);
    total += sqr
}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
