// problem 1
/* mindGame function get a number from an user and it is multiplied by 3 and added number 10 with the value
 and then the value divided by 2 and then subtract 5 from the value and return this value. 
 If an user give value except number it shows: Invalid input.  */

function mindGame(myNumber) {
  if (myNumber > 0 && typeof myNumber === "number") {
    const result = (myNumber * 3 + 10) / 2 - 5;
    return result;
  } else {
    return "Invalid input";
  }
}

const myNumber = 5;
const mindGameValueReturn = mindGame(myNumber);
console.log(mindGameValueReturn);

// problem 2
/* evenOdd function get a string from an user and calculate the length of this string and 
if the length of the string is divided by 2 and there is no decimal 
then it retun even else it return odd. If an user give value except string it shows: Invalid input. */

function evenOdd(myString) {
  if (typeof myString === "string") {
    const stringLength = myString.length;
    if (stringLength % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  } else {
    return "Invalid input";
  }
}

const myString = "chatgpt";
const evenOddValueReturn = evenOdd(myString);
console.log(evenOddValueReturn);

// problem 3
/* isLGSeven function take number as a input and subtract 7 from the number and check if the number is less than 7 then return this value, else the number is greater then 7 then return double of the value. If an user give value except number it shows: Invalid input.  */
function isLGSeven(userInput) {
  if (typeof userInput === "number") {
    const result = userInput - 7;
    if (result < 7) {
      return result;
    } else {
      return result * 2;
    }
  } else {
    return "Invalid input";
  }
}

const userInput = 5;
const isLGSevenValueReturn = isLGSeven(userInput);
console.log(isLGSevenValueReturn);

// problem 4
/* findingBadData function get a number array where if the number of an array is negative 
then it count how many negative input is given in the array and return the count value
else if there is no negative number then return 0.  */

function findingBadData(numberArray) {
  const badInput = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < 0) {
      badInput.push(numberArray[i]);
    }
  }
  if (badInput.length > 0) {
    return badInput.length;
  } else {
    return 0;
  }
}

const numberArray = [-4, -9, -5, -33, -55];
const findingBadDataValueReturn = findingBadData(numberArray);
console.log(findingBadDataValueReturn);

// problem 5
/* gemsToDiamond function take 3 number as an input, first value of the parameter multiply by 21,
  second value of the parameter multiply by 32 and third parameter of the value multiply by 43
  and then add all the value of multiplication and set the the value in the result.
  if the result is less then 2000 then return the value and if the value greater or equal then
   the value subtract by 2000 and then return the value  */
function gemsToDiamond(firstInput, secondInput, thirdInput) {
  if (
    typeof firstInput === "number" &&
    typeof secondInput === "number" &&
    typeof thirdInput === "number"
  ) {
    const gemsOfFirstFriend = firstInput * 21;
    const gemsOfSecondFriend = secondInput * 32;
    const gemsOfThirdFriend = thirdInput * 43;

    const result = gemsOfFirstFriend + gemsOfSecondFriend + gemsOfThirdFriend;
    if (result >= 2000) {
      return result - 2000;
    } else {
      return result;
    }
  } else {
    return "Please insert valid input";
  }
}

const firstInput = 20;
const secondInput = 200;
const thirdInput = 50;
const gemsToDiamondFunctionCaller = gemsToDiamond(
  firstInput,
  secondInput,
  thirdInput
);
console.log(gemsToDiamondFunctionCaller);
