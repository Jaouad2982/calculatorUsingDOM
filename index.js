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
const container = document.querySelectorAll(".container");

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

let divElement = returnDiv();
//const createElementDiv = () => {};
console.log(container);

const labels = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "=",
];

let containerArray = [];
let containerDivs;
const createNumberBlock = () => {
  for (let i = 0; i < labels.length; i++) {
    divElement = returnDiv();
    const container = document.querySelector(".container");
    container.classList.add("display-flex");
    container.append(divElement);
    divElement.classList.add("element");
    divElement.style.backgroundColor = randomColors();
    divElement.textContent = labels[i];
    divElement.classList.add("numbers");
  }
  containerDivs = document.querySelectorAll(".container div ");
};

createNumberBlock();

let arrayOfNumbers = [];
let result = 0;
const clickDiv = () => {
  container.forEach((element) => {
    element.addEventListener("click", function (e) {
      let numberClicked = Number(e.target.textContent);
      console.log(e.target.textContent);
      arrayOfNumbers.push(numberClicked);

      if (e.target.textContent == "+") {
        result = Number(arrayOfNumbers[0]) + Number(arrayOfNumbers[1]);
        containerDivs[14].textContent = result;
      } else if (e.target.textContent == "-") {
        result = Number(arrayOfNumbers[0]) - Number(arrayOfNumbers[1]);
        containerDivs[14].textContent = result;
      } else if (e.target.textContent == "*") {
        result = Number(arrayOfNumbers[0]) * Number(arrayOfNumbers[1]);
        containerDivs[14].textContent = result;
      } else if (e.target.textContent == "/") {
        result = Number(arrayOfNumbers[0]) / Number(arrayOfNumbers[1]);
        containerDivs[14].textContent = result;
      }
    });
  });
};

clickDiv();
