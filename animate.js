const inputElm = document.getElementById("input_value");
const buttonsElm = document.querySelectorAll("input");

for (let index = 0; index < buttonsElm.length; index++) {
  const element = buttonsElm[index];
  element.addEventListener("click", () => {
    const buttonValue = element.value;
    if (buttonValue === "AC") {
      clearResult();
    } else if (buttonValue === "DE") {
      clearElement();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendField(buttonValue);
    }
  });
}

function clearResult() {
  inputElm.value = " ";
}
function clearElement() {
  inputElm.value = inputElm.value.slice(0, -1);
}
function calculateResult() {
  inputElm.value = eval(inputElm.value);
}
function appendField(buttonValue) {
  inputElm.value += buttonValue;
}
