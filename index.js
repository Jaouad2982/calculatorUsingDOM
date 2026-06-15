const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, operand, num2) => {
  if (operand == "+") return add(num1, num2);
  else if (operand == "-") return subtract(num1, num2);
  else if (operand == "*") return multiply(num1 * num2);
  else if (operand == "/") return divide(num1, num2);
  else return "....";
};

// create a calculator

function randomColors() {
  let colorVal = Math.round(Math.random() * 255);
  let colorValTwo = Math.round(Math.random() * 255);
  let colorValThree = Math.round(Math.random() * 255);
  const rgbValue = `rgb(${colorVal}, ${colorValTwo}, ${colorValThree})`; //255,255,255
  return rgbValue;
}

const returnDiv = () => {
  let divElement = document.createElement("div");
  return divElement;
};

let divElement;
const createElementDiv = () => {
  divElement = returnDiv();
  const container = document.querySelector(".container");
  container.classList.add("display-flex");
  container.appendChild(divElement);
  divElement.classList.add("element");
  divElement.style.backgroundColor = randomColors();
};

createElementDiv();

const createNumberBlock = () => {
  for (let i = 0; i < 14; i++) {
    createElementDiv();
    if (i <= 9) divElement.textContent = i;
    if (i == 10) divElement.textContent = "+";
    if (i == 11) divElement.textContent = "-";
    if (i == 12) divElement.textContent = "*";
    if (i == 13) divElement.textContent = "/";
  }
};

createNumberBlock();
const container = document.querySelectorAll(".container");

let arrayOfNumbers = [];
let result = 0;
const clickDiv = () => {
  container.forEach((element) => {
    element.addEventListener("click", function (e) {
      let numberClicked = Number(e.target.textContent);
      arrayOfNumbers.push(numberClicked);

      if (e.target.textContent == "+") {
        result = Number(arrayOfNumbers[0]) + Number(arrayOfNumbers[1]);
        console.log(result);
      } else if (e.target.textContent == "-") {
        result = Number(arrayOfNumbers[0]) - Number(arrayOfNumbers[1]);
        console.log(result);
      } else if (e.target.textContent == "*") {
        result = Number(arrayOfNumbers[0]) * Number(arrayOfNumbers[1]);
        console.log(result);
      } else if (e.target.textContent == "/") {
        result = Number(arrayOfNumbers[0]) / Number(arrayOfNumbers[1]);
        console.log(result);
      }
    });
  });
};

clickDiv();
