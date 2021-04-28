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
  let useremail = document.querySelector("#emailUser").value;
  let userPass = document.querySelector("#passUser").value;
  // Checking my input if it has a text
  if (useremail != "" && userPass.length > "8") {
    document.querySelector("#passUser").value = "";
    document.querySelector("#emailUser").value = "";
  } else {
    document.querySelector(
      "#emailUser"
    ).placeholder = ` Please Enter valid Email`;
    document.querySelector("#passUser").placeholder = "Please Enter password";
  }
};
