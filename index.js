// Create a function that receive a text from user
// and check if the user has entered a phone number, and print that out.
// Note :
// phone number should be within the German network starts with (030 or 017) only
// and has 7 digits after the prefix number
//  Examples :
// > phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398
// > phone("Hi my number is 038  "); -> This is not a valid phone number 038
const userStr = " Hi, call me on 0302614398  ";
console.log("------------ Solution One ------------");
const checkPhoneNumOne = (str) => {
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
console.log(checkPhoneNumOne(userStr));
console.log("------------ Solution Two ------------");
const checkPhoneNumTwo = (str) => {
  const strToArr = str.trim().toLowerCase().split(" ");
  let findPhoneNum = [];
  for (let i = 0; i < strToArr.length; i++) {
    if (
      strToArr[i].substring(0, 3) == "030" ||
      strToArr[i].substring(0, 3) == "017"
    ) {
      findPhoneNum.push(strToArr[i]);
    }
  }
  let findNumToStr = findPhoneNum.join("");
  if (findNumToStr == "") {
    return `You don't enter a phone number or your phone number starts not with (030 or 017).`;
  } else if (findNumToStr.length == 10 && findNumToStr == +findPhoneNum) {
    return `${findPhoneNum} is your phone number.`;
  } else {
    return `${findPhoneNum} is NOT a valid phone number.`;
  }
};
console.log(checkPhoneNumTwo(userStr));
console.log("------------ Solution Three ------------");
console.log("------------ Solution End ------------");
