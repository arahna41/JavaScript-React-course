"use strict";

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((shop) => shop.amount > 0)
    .reduce((sum, current) => sum + current.amount, 0);
};

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
  return data.some((shop) => shop.amount < 0)
    ? data.reduce((sum, current) => sum + current.amount, 0)
    : getPositiveIncomeAmount(data);
};

getTotalIncomeAmount(funds);
