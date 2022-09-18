/**
 Напишите функцию, которая запускает цикл. Цикл на каждой итерации предлагает через prompt 
 ввести число, большее 100 (но максимум 10 итераций цикла) . 
 Если посетитель ввёл число меньше ста – попросить ввести ещё раз, 
 и так далее. Если пользователь вводит число больше ста, текст или цикл заканчивает все итерации, 
 то функция выводит в консоль последний ввод пользователя и завершает функцию.
 */

function runLoop() {
  let value;
  for (let index = 0; index < 10; index++) {
    value = prompt("Введите число больше 100");
    if (isNaN(value) || value > 100) {
      break;
    } 
  }
  console.log(value);
}

runLoop();

/*
Дан массив объектов. Вывести массив телефонных номеров активных пользователей, 
у которых баланс более 2000
*/

let users = [
  {
    isActive: true,
    balance: "226.60",
    name: "Eugenia Sawyer",
    phone: "+1 (840) 583-3207",
  },
  {
    isActive: true,
    balance: "2613.77",
    name: "Pauline Gallegos",
    phone: "+1 (985) 593-3328",
  },
  {
    isActive: false,
    balance: "3976.41",
    name: "Middleton Chaney",
    phone: "+1 (995) 591-2478",
  },
  {
    isActive: false,
    balance: "1934.58",
    name: "Burns Poole",
    phone: "+1 (885) 559-3422",
  },
  {
    isActive: true,
    balance: "3261.65",
    name: "Mcfadden Horne",
    gender: "male",
    phone: "+1 (942) 565-3988",
  },
];

function findActiveUsers(){
    let newPhoneActiveUsers = [];
for (let index = 0; index < users.length; index++) {
  if (users[index].isActive === true && users[index].balance >= 2000) {
    newPhoneActiveUsers.push(
      phone = users[index].phone,
    );
  }
}
console.log(newPhoneActiveUsers);
}

findActiveUsers();