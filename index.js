let language = "Javascript";
let score = 10;

let length = 10;
let width = 5;
let area = length * width ;
console.log(`The area of the rectangle is ${area}`)

let num1 = 10;
let num2 = 4;
let remainder = length * width ;
console.log(`The remind is ${remainder}`)

let num6 = 10;
let num7 = 4;
let division = num1 % num2;
console.log(`num1/ num2 = ${divison}`)

//Task2 

let integerNumber = 25 ;

let decimalNumber = 25.5;

let myString = "My Name is Heather!";

let myObject = {
    name: "Heather",
    age: 25,
    City: "San Francisco",
    Country: "South Africa",
}
let myArry = [25,Heather,City ]

console.log(`myArry = ${myArry}`)
console.log(`myObject = ${MyObject}`)
console.log(`myString = ${myString}`)
console.log(`decimalNumber = ${decimalNumber}`)
console.log(`integerNumber = ${integerNumber}`)

console.log(typeof myArry)
console.log(typeof myObject)
console.log(typeof myString)
console.log(typeof integerNumber)
console.log(typeof decimalNumber)

let array = ["one",1, "two",2, "three",3]
console.log(typeof array)
 

let nullVariable = "Two";
let undefinedVariable = "Three";

//Task 3// 

function convertRandToDollars(amountInRand) {
    const exchangeRateDollars = 0.066; 
    return amountInRand * exchangeRateDollars;
}

function convertRandToEuros(amountInRand) {
    const exchangeRateEuros = 0.058;
    return amountInRand * exchangeRateEuros;
}

function convertRandToPounds(amountInRand) {
    const exchangeRatePounds = 0.049; 
    return amountInRand * exchangeRatePounds;
}

// Example usage
const amountInRand = 1000;
const amountInDollars = convertRandToDollars(amountInRand);
const amountInEuros = convertRandToEuros(amountInRand);
const amountInPounds = convertRandToPounds(amountInRand);

console.log(`R1000 is approximately $${amountInDollars.toFixed(2)}, €${amountInEuros.toFixed(2)}, and £${amountInPounds.toFixed(2)}.`);

function calculateAmountWithVAT(value) {
    const VAT_RATE = 0.15; // 15% VAT rate
    const amountWithVAT = value + (value * VAT_RATE);
    return amountWithVAT;
  }
  const InitialAmount = 400;
  const FinalAmount = calculateAmountWithVAT(initialAmount);
  console.log(`The amount after tax is R${finalAmount.toFixed(2)}`);
3; const Num8 = 8;
const Num9 = 20;
const Num10= 14;
function compareAndDisplayLarger(num1, num2) {
  if (num1> num2) {
    console.log(`${num1} is larger than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}`);
  } else {
    console.log(`${num1} and ${num2} are equal.`);
  }
}
compareAndDisplayLarger(Num1,Num2);
4; function isOddOrEven(num) {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }
  const num5= 8; /
  isOddOrEven(num5);
5;     const Num11= 8;
const Num12= 20;
const Num13= 14;
let Largest, Middle, Smallest;
if (Num4>= Num5&& Num4 >= Num6) {
  largest = Num4;
  if (Num5 >= Num6) {
    middle = Num5;
    smallest = Num6;
  } else {
    middle = Num6;
    smallest = Num5;
  }
} else if (Num5 >= Num4 && Num5 >= Num6) {
  largest = Num5;
  if (Num4 >= Num6) {
    middle = Num4;
    smallest = Num6;
  } else {
    middle = Num6;
    smallest = Num4;
  }
} else {
  largest = Num6;
  if (Num4 >= Num5) {
    middle = Num4;
    smallest = Num5;
  } else {
    middle = Num5;
    smallest = Num4;
  }
}
console.log(`Sorted from largest to smallest: ${largest}, ${middle}, ${smallest}`);

function calculateAmountWithVAT(value) {
    const VAT_RATE = 0.15; // 15% VAT rate
    const amountWithVAT = value + (value * VAT_RATE);
    return amountWithVAT;
  }
  const initialAmount = 400;
  const finalAmount = calculateAmountWithVAT(initialAmount);
  console.log(`The amount after tax is R${finalAmount.toFixed(2)}`);
3; const Num1 = 8;
const Num2 = 20;
const Num3= 14;
function compareAndDisplayLarger(num1, num2) {
  if (num1> num2) {
    console.log(`${num1} is larger than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}`);
  } else {
    console.log(`${num1} and ${num2} are equal.`);
  }
}
compareAndDisplayLarger(Num1,Num2);
4; function isOddOrEven(num) {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }
  const num5= 8; 
  isOddOrEven(num5);
5;     const Num4= 8;
const Num5= 20;
const Num6= 14;
let largest, middle, smallest;
if (Num4>= Num5&& Num4 >= Num6) {
  largest = Num4;
  if (Num5 >= Num6) {
    middle = Num5;
    smallest = Num6;
  } else {
    middle = Num6;
    smallest = Num5;
  }
} else if (Num5 >= Num4 && Num5 >= Num6) {
  largest = Num5;
  if (Num4 >= Num6) {
    middle = Num4;
    smallest = Num6;
  } else {
    middle = Num6;
    smallest = Num4;
  }
} else {
  largest = Num6;
  if (Num4 >= Num5) {
    middle = Num4;
    smallest = Num5;
  } else {
    middle = Num5;
    smallest = Num4;
  }
}
console.log(`Sorted from largest to smallest: ${largest}, ${middle}, ${smallest}`);




























