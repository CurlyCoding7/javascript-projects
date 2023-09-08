const screen = document.querySelector("#display");
const btns = document.querySelectorAll(".btn");

let inputStr = "";
let result;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      result = eval(inputStr);
      screen.value = result;
    } else if (e.target.value === "AC") {
      inputStr = "";
      screen.value = inputStr;
    } else if (e.target.value === "DE") {
      inputStr = inputStr.substring(0, inputStr.length - 1);
      screen.value = inputStr;
    } else {
      inputStr += e.target.value;
      screen.value = inputStr;
    }
  });
});
