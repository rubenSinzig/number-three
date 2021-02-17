// Create a function that receive a text from user
// and check if the user has entered a phone number, and print that out.
// Note :
// phone number should be within the German network starts with (030 or 017) only
// and has 7 digits after the prefix number
//  Examples :
// > phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398
// > phone("Hi my number is 038  "); -> This is not a valid phone number 038
const userStr = " Hi, call me on 0332214398  ";
console.log("------------ Solution One ------------");
const checkPhoneNum = (str) => {
  const strToArr = str.trim().toLowerCase().split(" ");
  const findPhoneNum = strToArr.find(
    (el) => el.slice(0, 3) == "030" || el.slice(0, 3) == "017"
  );
  return findPhoneNum == undefined
    ? `You don't enter a phone number or your phone number starts not with (030 or 017).`
    : findPhoneNum.length == 10 && findPhoneNum == +findPhoneNum
    ? `${findPhoneNum} is your phone number.`
    : `${findPhoneNum} is NOT a valid phone number.`;
};
console.log(checkPhoneNum(userStr));
console.log("------------ Solution Two ------------");
console.log("------------ Solution Three ------------");
console.log("------------ Solution End ------------");
