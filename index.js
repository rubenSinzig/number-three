// Write a function that accepts several parameters
// and calculates the number of money that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
// The current age of the person
// e.g. 40
// The retirement age of the person
// e.g. 60
// The monthly wage the person earns
// e.g. 1000
// The percentage (as integer) that the person saves each month
// e.g. 10%
// If the person has already retired then the message:
// ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and
// she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000
const currentAge = 40;
const retirementAge = 65;
const monthlySalary = 2000;
const monthlySaveInPerc = 5;
console.log("------------ Solution One ------------");
const saveUntilRetirement = (age, pensionAge, salary, percent) => {
  if (age < pensionAge) {
    return (pensionAge - age) * (salary * 12 * (percent / 100));
  }
  return `You’re already retired!`;
};
console.log(
  saveUntilRetirement(
    currentAge,
    retirementAge,
    monthlySalary,
    monthlySaveInPerc
  )
);
console.log("------------ Solution Two ------------");

console.log("------------ Solution Three ------------");

console.log("------------ Solution End ------------");
