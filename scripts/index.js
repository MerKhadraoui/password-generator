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
  //   let numbArr = document.querySelector("#numb");
  //   let alphArr = document.querySelector("#alph");
  //   let charArr = document.querySelector("#chars");
  let result = "";
  const randomNumGetter = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  const passLength = document.querySelector("#input2").value;
  // document.querySelector(
  //   "#input2"
  // ).placeholder = `The Pass Length should be divisible by 3`;
  let leng = Math.floor(passLength * 3);
  for (let i = 0; i < leng; i++) {
    if (document.querySelector("#numb:checked") !== null) {
      result += numbers[randomNumGetter(numbers)];
    }
    // some other if
    if (document.querySelector("#alph:checked") !== null) {
      result += alpha[randomNumGetter(alpha)].toUpperCase();
    }
    // some other if
    if (document.querySelector("#chars:checked") !== null) {
      result += charactersSp[randomNumGetter(charactersSp)];
    }
  }

  return result;
};
console.log(passGen());
const btn = document.querySelector(".btn");
const divText = document.querySelector(".print");
btn.onclick = () => {
  if (
    document.querySelector("#numb:checked") == null &&
    document.querySelector("#alph:checked") == null &&
    document.querySelector("#chars:checked") == null
  ) {
    alert(" please, selct the Chars possibles");
  } else {
    divText.innerHTML += `${passGen()}  <br>`;
  }
};
