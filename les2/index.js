//Unit 1
//Создать скрипт для сложения, вычитания, умножения и разделения двух чисел и вывода результатов.

function sum(firstNumber, secondNumber) {
  return Number(firstNumber) + Number(secondNumber);
}
function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiplying(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function division(firstNumber, secondNumber) {
  if (secondNumber == 0) alert("You can’t divide it by zero.");
  return +(firstNumber / secondNumber).toFixed(2);
}

function checkInputNum(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

function checkAddedData() {
  let firstNumber = prompt("Fill in the input field. Add the first number:");
  let secondNumber = prompt("Fill in the input field. Add the second number:");

  if (!checkInputNum(firstNumber) || !checkInputNum(secondNumber)) {
    alert("Error! Please added the number.");
  } else {
    console.log("Unit 1");
    console.log(sum(firstNumber, secondNumber));
    console.log(subtraction(firstNumber, secondNumber));
    console.log(multiplying(firstNumber, secondNumber));
    console.log(division(firstNumber, secondNumber));
  }
}

checkAddedData();

// Unit 2
// Определить среднее арифметическое трех чисел

function average(firstNumber, secondNumber, thirdNumber) {
  return +(
    (Number(firstNumber) + Number(secondNumber) + Number(thirdNumber)) /
    3
  ).toFixed(2);
}

function checkAverage() {
  let firstNumber = prompt("Fill in the input field. Add the first number:");
  let secondNumber = prompt("Fill in the input field. Add the second number:");
  let thirdNumber = prompt("Fill in the input field. Add the second number:");

  if (
    !checkInputNum(firstNumber) ||
    !checkInputNum(secondNumber) ||
    !checkInputNum(thirdNumber)
  ) {
    alert("Error! Please added the number.");
  } else {
    console.log("Unit 2");
    console.log(average(firstNumber, secondNumber, thirdNumber));
  }
}

checkAverage();

// Unit 3
// Получить от пользователя 3 строки и вывести их в произвольном порядке одной командой

function checkStr() {
  let firstStr = prompt("Fill in the input field. Add the first string:");
  let secondStr = prompt("Fill in the input field. Add the second string:");
  let thirdStr = prompt("Fill in the input field. Add the third string:");

  if (firstStr.length != 0 || secondStr.length != 0 || thirdStr.length != 0) {
    console.log("Unit 3");
    console.log(`${firstStr} ${secondStr} ${thirdStr}`);
  } else {
    alert("The field should not be empty");
  }
}

checkStr();
