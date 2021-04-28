// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password
// Examples:
// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let charactersSp = ["!", "§", "$", "%", "&", "?", "@", "€"];
const passGen = () => {
  let result = "";
  const randomNumGetter = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  for (let i = 0; i <= 17; i++) {
    if (i % 2 == 0) {
      result += numbers[randomNumGetter(numbers)];
    }
    // some other if
    if (i % 3 == 0) {
      result += alpha[randomNumGetter(alpha)].toUpperCase();
    } else {
      result += alpha[randomNumGetter(alpha)];
    }
    // some other if
    if (i % 5 == 0) {
      result += charactersSp[randomNumGetter(charactersSp)];
    }
  }
  return result;
};

console.log(passGen());

// console.log(passwordGen());
// other way
let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let charactersSp = ["!", "§", "$", "%", "&", "?", "@", "€"];
const passGen = () => {
  let result = "";
  const randomNumGetter = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  for (let i = 0; i <= 17; i++) {
    if (i % 2 == 0) {
      result += numbers[randomNumGetter(numbers)];
    }
    // some other if
    if (i % 3 == 0) {
      result += alpha[randomNumGetter(alpha)].toUpperCase();
    } else {
      result += alpha[randomNumGetter(alpha)];
    }
    // some other if
    if (i % 5 == 0) {
      result += charactersSp[randomNumGetter(charactersSp)];
    }
  }
  return result;
};

console.log(passGen());
