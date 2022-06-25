"use strict";

/* task 1 */
const someString = "This is some strange string";
const empty = 125;

function reverse(str) {
  if (typeof str !== "string") {
    console.log("Ошибка!");
  } else {
    console.log(str.split("").reverse().join(""));
  }
}
reverse(someString);
reverse(empty);

/* task 2 */
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  if (arr.includes(missingCurr)) {
    let curr = "";
    for (let i of arr) {
      if (i == missingCurr) {
        continue;
      } else {
        curr += i + "\n";
      }
    }
    console.log(`Доступные валюты: \n${curr}`);
  }
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");

/* task 3 */
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let shops = data.shops;
  let squares = 0;
  for (let i of shops) {
    squares += i.width * i.length;
  }

  let volume = squares * data.height;

  let result = volume * data.moneyPer1m3;

  if (result <= data.budget) {
    console.log("Бюджета достаточно");
  } else {
    console.log("Бюджета недостаточно");
  }
}
isBudgetEnough(shoppingMallData);

/* task 4 */
const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  let arr1 = [],
    arr2 = [],
    arr3 = [],
    string = "Оставшиеся студенты: ";

  arr1 = arr.slice(0, 3);
  arr2 = arr.slice(3, 6);
  arr3 = arr.slice(6, 9);

  if (arr.length > 9) {
    string += arr.slice(9).join(", ");
  } else {
    string += "-";
  }

  let result = [];
  result[0] = arr1;
  result[1] = arr2;
  result[2] = arr3;
  result[3] = string;

  console.log(result);
}
sortStudentsByGroups(students);
