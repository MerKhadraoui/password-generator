// const submit = () => {
//   let useremail = document.querySelector("#emailUser").value;
//   let userPass = document.querySelector("#passUser").value;
//   // Checking my input if it has a text
//   if (useremail != "" && userPass.length > "8") {
//     let newLi = document.createElement("li");
//     let newNav = document.createElement("nav");
//     let text = document.createTextNode(useremail);
//     let pass = document.createTextNode(userPass);
//     newLi.appendChild(text);
//     newLi.appendChild(newNav);
//     newNav.appendChild(pass);
//     document.querySelector(".result").appendChild(newLi);
//     document.querySelector("#passUser").value = "";
//     document.querySelector("#emailUser").value = "";
//   } else {
//     document.querySelector(
//       "#emailUser"
//     ).placeholder = ` Please Enter valid Email`;
//     document.querySelector("#passUser").placeholder =
//       "Please Enter valid password";
//   }
// };

const submit = () => {
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
  let numbArr = document.querySelector("#numb");
  let alphArr = document.querySelector("#alph");
  let charArr = document.querySelector("#chars");
  //document.querySelector('#accept:checked') !== null
};
