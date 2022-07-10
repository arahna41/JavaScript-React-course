/* Задача на работу с рекурсией
Задание:
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. 
Учтите, что сам вложенный массив тоже входит в счет.  */

"use stricr";
function deepCount(a) {
  let res = a.length;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      res += deepCount(a[i]);
    }
  }
  return res;
}

deepCount(["1", 5, "3", ["10"]]); // 5;
deepCount([1, 2, [3, 4, [5]]]); //7;
deepCount([]); // 0;
deepCount([[[[[[[[[]]]]]]]]]); // 8;
