/* Задача на работу со строками
Задание:
Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. 
Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, 
поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. 
Если строка является панграммой - вернется true, если нет - false. */

"use strict";

function isPangram(string) {
  const set = new Set(Array.from(string.toLowerCase()));
  const alfabet = Array.from("qwertyuiopasdfghjklzxcvbnm").sort();
  let res;

  for (let i of alfabet) {
    if (!set.has(i)) {
      res = false;
    } else {
      res = true;
    }
  }
  return res;
}

isPangram("The quick brown fox jumps over the lazy dog"); //true
isPangram("Hello world"); //false
