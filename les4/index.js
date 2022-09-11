/*
    Один доллар стоит 26 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
*/

function firstTask() {
  console.log("Unit 1");
  const dollar = 26;
  for (let i = 10; i <= 100; i = i + 10) {
    console.log(`${i}$ costs ${i * dollar} hryvnias`);
  }
}

firstTask();

/*
    Дано целое число N (ввести через prompt). Вывести все целые числа от 1 до 100, 
    квадрат которых не превышает числа N
*/
function checkInputNum(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

function secondTask() {
  console.log("Unit 2");
  let mainNumber = prompt(
    "Fill in the input field. Add the number from 1 to 100:"
  );

  if (!checkInputNum(mainNumber) || mainNumber < 1 || mainNumber > 100) {
    alert("Error! Please added the number. The number should be from 1 to 100");
  } else {
    for (let i = 1; i <= 100; i = i + 1) {
      if (i * i <= mainNumber) {
        console.log(i);
      }
    }
  }
}

secondTask();

/*
Дано целое число (ввести через prompt). Выяснить, простое ли оно 
(простым называется число, больше 1, не имеющее других делителей кроме 1 и себя).
*/
function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function thirdTask() {
  let mainNumber = prompt("Fill in the input field. Add the number:");
  if (!checkInputNum(mainNumber)) {
    alert("Error! Please added the number.");
  } else {
    console.log("Unit 3");
    console.log(isPrime(mainNumber));
  }
}

thirdTask();
