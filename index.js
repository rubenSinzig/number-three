// ##### 3. Word Converter
//
// - Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array.
// Look at the expected output below. **Important**: Do **not** use a loop to complete this task.
// Print your solution to the console.
//
// **Array of words**
// ["smart", "kind", "sweet", "small", "clear"];
//
// **Expected output**
// ["smarter", "kinder", "sweeter", "smaller", "clearer"];
//
const words = ["smart", "kind", "sweet", "small", "clear"];
//
console.log("------------- Solution One -------------");
const wordConverterOne = (arr) => {
  return arr.map((el, i) => `${el}er`);
};
console.log(wordConverterOne(words));
console.log("------------- Solution Two -------------");
const wordConverterTwo = (arr) => {
  let convertedWords = [];
  for (let i = 0; i < arr.length; i++) {
    convertedWords.push(`${arr[i]}er`);
  }
  return convertedWords;
};
console.log(wordConverterTwo(words));
console.log("------------- Solution Three -------------");
// Recursion doesn't work for me.
/*
function wordConverterThree(arr) {
  let convertedWords = [];
  if (arr.length == 0) {
    return convertedWords;
  }
  convertedWords.push(`${arr[1]}er`);
  return wordConverterThree(arr.length - 1);
}
console.log(wordConverterThree(words));
*/
console.log("------------- Solution End -------------");
