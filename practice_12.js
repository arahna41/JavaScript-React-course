"use strict";

// first task
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose =
  (...rest) =>
  (a) =>
    rest.reduceRight((res, fn) => fn(res), a);

const discount = compose(normalizePrice, divide100, multiply20);

console.log(discount(200.0));

// second task

const add1 = function (a) {
  return a + 1;
};
const addAll3 = function (a, b, c) {
  return a + b + c;
};

const composeWithArgs = (...fns) =>
  fns.reduceRight(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );

console.log(composeWithArgs(add1, addAll3)(1, 2, 3)); //Вернет 7;
