/*
   Дано трехзначное число.
    Верно ли, что все цифры одинаковы? (Использовать if)
    Есть ли среди цифр одинаковые цифры? (Использовать if)
*/

function checkInputNum(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

function checkInputNumber() {
  let mainNumber, firstNumber, secondNumber, thirdNumber, actionNumber;
  mainNumber = prompt(
    "Fill in the input field. Add the number from 100 to 999:"
  );

  if (!checkInputNum(mainNumber) || mainNumber.length > 3) {
    alert(
      "Error! Please added the number. The number should be from 100 to 999"
    );
  } else {
    thirdNumber = mainNumber % 10;
    actionNumber = (mainNumber - thirdNumber) / 10;
    secondNumber = actionNumber % 10;
    firstNumber = (actionNumber - secondNumber) / 10;

    if (firstNumber === secondNumber && firstNumber === thirdNumber) {
      console.log("All digits are the same in the number");
    } else if (
      firstNumber === secondNumber ||
      firstNumber === thirdNumber ||
      secondNumber === thirdNumber
    ) {
      console.log("There are identical digits in the number");
    } else {
      console.log("All digits are different in the number");
    }
  }
}

checkInputNumber();

/*
    Переписать условия "if" на "switch". Number вводит пользователь.
*/

function useSwitch() {
  let mainNumber = prompt(
    "Fill in the input field. Add the number from 0 to 9:"
  );

  if (!checkInputNum(mainNumber) || mainNumber.length > 1) {
    alert("Error! Please added the number. The number should be from 0 to 9");
  } else {
    switch (Number(mainNumber)) {
      case 0:
        alert("You've entered the number - 0");
        break;
      case 1:
        alert("You've entered the number - 1");
        break;
      case 2:
      case 3:
        alert("You've entered the number - 2 or 3");
        break;
      default:
        alert("You've entered the number over 3");
        break;
    }
  }
}

useSwitch();

/*
    Дано число (вводит пользователь), проверить входит ли оно в диапазон от 0 до 500
*/

function checkRange() {
  let mainNumber = prompt("Fill in the input field. Add the number:");

  if (!checkInputNum(mainNumber)) {
    alert("Error! Please added the number.");
  } else {
    if (mainNumber < 0 || mainNumber > 500) {
      alert(
        `You've entered the number - ${mainNumber}. This number doesn't include from 0 to 500`
      );
    } else {
      alert(
        `You've entered the number - ${mainNumber}. This number include from 0 to 500`
      );
    }
  }
}

checkRange();
